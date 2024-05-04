// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGXqipnVsTv2B_NI5U1NSxdGOIkBKrKoM",
  authDomain: "netflixgpt-c81b1.firebaseapp.com",
  projectId: "netflixgpt-c81b1",
  storageBucket: "netflixgpt-c81b1.appspot.com",
  messagingSenderId: "846184365302",
  appId: "1:846184365302:web:893d825a9fc1a180cfc0d7",
  measurementId: "G-FLD10W93LC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();