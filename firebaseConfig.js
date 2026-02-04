// Import the functions you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLm_HUbnNfRv4ZH9u08VQi7pmZzm1GgRk",
  authDomain: "yasser-chat-6c39c.firebaseapp.com",
  projectId: "yasser-chat-6c39c",
  storageBucket: "yasser-chat-6c39c.appspot.com",
  messagingSenderId: "141483029088",
  appId: "1:141483029088:web:49c20f6f027be755bbc905"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
