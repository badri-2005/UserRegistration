// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";

import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVCl9sdG1zIwh4zEGA07IsLKukjetPBMs",
  authDomain: "login-auth-422f1.firebaseapp.com",
  projectId: "login-auth-422f1",
  storageBucket: "login-auth-422f1.firebasestorage.app",
  messagingSenderId: "507130775923",
  appId: "1:507130775923:web:f80bbd6183bdc9f312dd06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore(app);

export default app;