// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcwv0K8NeiXwXUFRnn4tI_hStCtGBkeQY",
  authDomain: "alpha-bookstore-dfc3e.firebaseapp.com",
  databaseURL: "https://alpha-bookstore-dfc3e-default-rtdb.firebaseio.com",
  projectId: "alpha-bookstore-dfc3e",
  storageBucket: "alpha-bookstore-dfc3e.appspot.com",
  messagingSenderId: "1070880849087",
  appId: "1:1070880849087:web:acd75fdd3cd049d0ea9a0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database and export it
export const db = getDatabase(app);
