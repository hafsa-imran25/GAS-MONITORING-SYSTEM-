import { app, db } from "./firebase.js";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const usersRef = collection(db, "users");

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("lemail").value.trim();
  const phone = document.getElementById("lphone").value.trim();

  if (!email || !phone) {
    alert("Please fill out both email and phone number.");
    return;
  }

  try {
    // Check if user already exists
    const q = query(usersRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      // If user doesn't exist, create a new one
      await addDoc(usersRef, {
        email,
        phone,
        createdAt: new Date().toISOString(),
      });
      alert("New user registered successfully!");
    } else {
      // If user exists, update phone number
      querySnapshot.forEach(async (docSnap) => {
        await updateDoc(doc(db, "users", docSnap.id), {
          phone,
          lastLogin: new Date().toISOString(),
        });
      });
      alert("Welcome back! Logged in successfully.");
    }

    // Save session locally
    localStorage.setItem("smartgas_user", JSON.stringify({ email, phone }));

    window.location.href = "index.html";
  } catch (error) {
    console.error("Error logging in:", error);
    alert("Error: " + error.message);
  }
});
