// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGmCFE1CqEajuiz81xjcr1HmzeFEW5Qvs",
  authDomain: "coderhouse-76355.firebaseapp.com",
  projectId: "coderhouse-76355",
  storageBucket: "coderhouse-76355.firebasestorage.app",
  messagingSenderId: "343696181898",
  appId: "1:343696181898:web:8e9755d72b81f3121afb73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();