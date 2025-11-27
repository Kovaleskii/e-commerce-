// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";

// 🔴 Cole aqui o firebaseConfig do seu projeto
const firebaseConfig = {
  apiKey: "AIzaSyBwz41c2X-RvuIhigM05KdhMXlNLMjJ4QY",
  authDomain: "karen-site-9e8f0.firebaseapp.com",
  projectId: "karen-site-9e8f0",
  storageBucket: "karen-site-9e8f0.firebasestorage.app",
  messagingSenderId: "199721152796",
  appId: "1:199721152796:web:5160c136edb7fe4a500ad9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const microsoftProvider = new OAuthProvider("microsoft.com");

// (Opcional) escopos extras para Microsoft, ex:
// microsoftProvider.addScope("User.Read");
