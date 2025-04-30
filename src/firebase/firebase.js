// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwHh-zWOVn36lW8JbVMoaAjRaQq89Qhes",
  authDomain: "blog-post-80346.firebaseapp.com",
  projectId: "blog-post-80346",
  storageBucket: "blog-post-80346.firebasestorage.app",
  messagingSenderId: "195341439037",
  appId: "1:195341439037:web:a535ce7138608906581a54",
  measurementId: "G-0DXV8QRJMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);
