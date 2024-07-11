import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey: "AIzaSyCGisgFDDQJTS-pjaiGV22y9y0o7jHPOOs",
  authDomain: "our-college-cf7dc.firebaseapp.com",
  projectId: "our-college-cf7dc",
  storageBucket: "our-college-cf7dc.appspot.com",
  messagingSenderId: "216528764315",
  appId: "1:216528764315:web:4270007c05e4925b45753e"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth  = getAuth(app);