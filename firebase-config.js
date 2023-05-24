// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8nBHH2yPmri2RXKiq5yVtOhyJmmYRU10",
  authDomain: "onlineshop-5da65.firebaseapp.com",
  projectId: "onlineshop-5da65",
  storageBucket: "onlineshop-5da65.appspot.com",
  messagingSenderId: "399560353338",
  appId: "1:399560353338:web:92f87c4d4b923bc08c3703",
  measurementId: "G-H97VMF0K0S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();