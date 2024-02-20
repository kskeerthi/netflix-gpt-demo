// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm1WwFpK3GdurSZYLdhCCM0RvTyaaiqcs",
  authDomain: "netflixgpt-demo.firebaseapp.com",
  projectId: "netflixgpt-demo",
  storageBucket: "netflixgpt-demo.appspot.com",
  messagingSenderId: "486862043140",
  appId: "1:486862043140:web:2ee59f8f2aa2cdf912dd51",
  measurementId: "G-M2VJBK5ECC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();