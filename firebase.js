// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, getApps, getApp } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwBF7unWlDGND_DDYRYj7uo6yQgmh3xd4",
  authDomain: "insta-clone-22c4c.firebaseapp.com",
  projectId: "insta-clone-22c4c",
  storageBucket: "insta-clone-22c4c.appspot.com",
  messagingSenderId: "863400680414",
  appId: "1:863400680414:web:bdea8626556b7aa6005b4f",
  measurementId: "G-PM5LHXHKD9",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);
const db = getFirestore();
const storage = getStorage();

export { app, db, analytics, storage };
