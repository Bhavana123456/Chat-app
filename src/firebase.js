// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWS0RqQXVscswvXx1KcEJJ0WRwY73eLko",
  authDomain: "chat-58da9.firebaseapp.com",
  projectId: "chat-58da9",
  storageBucket: "chat-58da9.appspot.com",
  messagingSenderId: "885135832819",
  appId: "1:885135832819:web:4cca414b04162ee2a5e986",
  measurementId: "G-VPHM4ZKQFV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
