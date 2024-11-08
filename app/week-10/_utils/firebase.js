// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMgXuZa8OVmZJtXz0QCUh0rfw6J_jBooI",
  authDomain: "week9-demo-ea947.firebaseapp.com",
  projectId: "week9-demo-ea947",
  storageBucket: "week9-demo-ea947.firebasestorage.app",
  messagingSenderId: "782834636995",
  appId: "1:782834636995:web:300c30a54765bcb88aaa76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app);
