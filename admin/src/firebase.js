// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtxuLihvazOVM8fVzG3Fsz8UV0jth0DEM",
  authDomain: "afrikai-shop.firebaseapp.com",
  projectId: "afrikai-shop",
  storageBucket: "afrikai-shop.appspot.com",
  messagingSenderId: "313739548250",
  appId: "1:313739548250:web:bf410d2834737f0316ea63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;