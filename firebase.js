// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC-YKhMYK3GdknDo4rjD0ksmdlWNX6ESo8",
  authDomain: "gas-management-system-f4344.firebaseapp.com",
  projectId: "gas-management-system-f4344",
  storageBucket: "gas-management-system-f4344.appspot.com",
  messagingSenderId: "511571836469",
  appId: "1:511571836469:web:91aca14dc4c99d4c51fb7c",
  measurementId: "G-CHTZ3F8BXR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
