// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);