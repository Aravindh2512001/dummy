// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBecYXF1HmCmbqJb65-jM3jmqEtnNOhAzg",
  authDomain: "crud-9af15.firebaseapp.com",
  projectId: "crud-9af15",
  storageBucket: "crud-9af15.appspot.com",
  messagingSenderId: "377055850109",
  appId: "1:377055850109:web:859fabc16633c5c6f24b14",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
