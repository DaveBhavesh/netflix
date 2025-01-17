// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqEhuQHxQhsRgbEpVCsUc3T-XGalyt8z0",
  authDomain: "netflix-ca1ef.firebaseapp.com",
  projectId: "netflix-ca1ef",
  storageBucket: "netflix-ca1ef.firebasestorage.app",
  messagingSenderId: "503342595429",
  appId: "1:503342595429:web:c3a8794c4e6f911e43758c",
  measurementId: "G-0BNNJ54575"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();