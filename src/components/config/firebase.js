
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDy_gNh7hqk8biTv0AUfCODL_sRAmphw_I",
  authDomain: "hotel-app-a9196.firebaseapp.com",
  projectId: "hotel-app-a9196",
  storageBucket: "hotel-app-a9196.appspot.com",
  messagingSenderId: "51477007208",
  appId: "1:51477007208:web:d7b95e7be4bfe4c1f5a4dd",
  measurementId: "G-C4CTQQM0RG"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export{auth};