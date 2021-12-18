// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5n9obOCeUPlvD8FDB136d7Axo5jvrzcg",
  authDomain: "reactjs-901ff.firebaseapp.com",
  projectId: "reactjs-901ff",
  storageBucket: "reactjs-901ff.appspot.com",
  messagingSenderId: "413215919890",
  appId: "1:413215919890:web:1200d43dded55445d12dcb",
  measurementId: "G-4WZD3CKB5D"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();

