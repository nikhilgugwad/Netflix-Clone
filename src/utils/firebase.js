// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCegnW39xfa3GR9ndLuSV7wbmfhF9NKKpM",
  authDomain: "netflixgpt-9a1ed.firebaseapp.com",
  projectId: "netflixgpt-9a1ed",
  storageBucket: "netflixgpt-9a1ed.appspot.com",
  messagingSenderId: "639871529521",
  appId: "1:639871529521:web:36924c94fe24d6cf001b10",
  measurementId: "G-20QE3Y4JDG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
