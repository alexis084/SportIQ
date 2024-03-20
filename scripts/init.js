// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFireStore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVCAPkxbc6vYtcAwAaWqw7KEZMop3lP8A",
  authDomain: "sportiq-8f364.firebaseapp.com",
  projectId: "sportiq-8f364",
  storageBucket: "sportiq-8f364.appspot.com",
  messagingSenderId: "735298016025",
  appId: "1:735298016025:web:b4bfa851773d884a9c6b88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

// Initialize Firebase Firestore
const db = getFireStore(app);

// Update Firestore time stamp settings
db.settings( { timestampsInSnapshots: true} );