// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth, GoogleAuthProvider, OAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// 🔴 Cole aqui o firebaseConfig do seu projeto
const firebaseConfig = {
  apiKey: "AIzaSyAm9kr1lZzfXQwfOMt-gEM2B95i2wnzOU0",
  authDomain: "ecommerce-64a8e.firebaseapp.com",
  projectId: "ecommerce-64a8e",
  storageBucket: "ecommerce-64a8e.firebasestorage.app",
  messagingSenderId: "905016927356",
  appId: "1:905016927356:web:2dfdd1a1ab19124e7cd5f9"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const microsoftProvider = new OAuthProvider("microsoft.com");
export const db = getFirestore(app);

