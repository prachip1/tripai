// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8Wxmss_1NsBUZKpa1MFm93g1EEPTkOfc",
  authDomain: "aitripplanner-d75bc.firebaseapp.com",
  projectId: "aitripplanner-d75bc",
  storageBucket: "aitripplanner-d75bc.appspot.com",
  messagingSenderId: "237112620391",
  appId: "1:237112620391:web:34ce62e31fbb371c9aebc2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);