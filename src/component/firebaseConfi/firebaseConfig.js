// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCQN8yLztYxZapjo1PONEJ9NFGkv80cZ-E",
  authDomain: "hotel-3f0c9.firebaseapp.com",
  projectId: "hotel-3f0c9",
  storageBucket: "hotel-3f0c9.appspot.com",
  messagingSenderId: "807407510188",
  appId: "1:807407510188:web:d89041ca89cdd3b4bd7509"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth,db}
