// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS6NDcHBSpkdB9DTpdp77bSTdUamV8chs",
  authDomain: "talentsight-1479d.firebaseapp.com",
  projectId: "talentsight-1479d",
  storageBucket: "talentsight-1479d.firebasestorage.app",
  messagingSenderId: "241359556279",
  appId: "1:241359556279:web:a6d6d9f011244f3991c732",
  measurementId: "G-7J70M651GK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);