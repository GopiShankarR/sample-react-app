// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTAn2UN9pSkZSHETmUho8BZ7IOKN154cE",
  authDomain: "react-app-7b224.firebaseapp.com",
  projectId: "react-app-7b224",
  storageBucket: "react-app-7b224.appspot.com",
  messagingSenderId: "717198415082",
  appId: "1:717198415082:web:4b12f24fe7442fecc1f393",
  measurementId: "G-8W7VQXY67B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();