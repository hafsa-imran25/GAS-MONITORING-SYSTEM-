import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC-YKhMYK3GdknDo4rjD0ksmdlWNX6ESo8",
  authDomain: "gas-management-system-f4344.firebaseapp.com",
  projectId: "gas-management-system-f4344",
  storageBucket: "gas-management-system-f4344.firebasestorage.app",
  messagingSenderId: "511571836469",
  appId: "1:511571836469:web:91aca14dc4c99d4c51fb7c",
  measurementId: "G-CHTZ3F8BXR"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export { collection, addDoc };
