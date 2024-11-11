// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNNr0hlXN67MMEvZsDxFQ4Eir8vgsRoko",
  authDomain: "auth-moha-milion.firebaseapp.com",
  projectId: "auth-moha-milion",
  storageBucket: "auth-moha-milion.firebasestorage.app",
  messagingSenderId: "889424730588",
  appId: "1:889424730588:web:a5314fa16d4fbc68a35719"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
