import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCmplq4zgm0qsLbxsvvOKu5csOMXXIAlgE",
  authDomain: "group-app-fc9ea.firebaseapp.com",
  projectId: "group-app-fc9ea",
  storageBucket: "group-app-fc9ea.appspot.com",
  messagingSenderId: "114760039299",
  appId: "1:114760039299:web:47fdec28387fa601c914b6",
  measurementId: "G-ZGXLKCTYNN"
};


const app = initializeApp(firebaseConfig);
const db =getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export{auth,db};