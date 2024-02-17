// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-v-estate.firebaseapp.com",
  projectId: "mern-v-estate",
  storageBucket: "mern-v-estate.appspot.com",
  messagingSenderId: "986570058735",
  appId: "1:986570058735:web:751ec1c3357db8df33a41a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);