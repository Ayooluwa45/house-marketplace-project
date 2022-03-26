import { initializeApp } from "firebase/app";import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6-Ju7nkLDfiEQuE9W-T2_HCdeCpAm5L8",
  authDomain: "house-marketplace-app-f3c95.firebaseapp.com",
  projectId: "house-marketplace-app-f3c95",
  storageBucket: "house-marketplace-app-f3c95.appspot.com",
  messagingSenderId: "741085995757",
  appId: "1:741085995757:web:e6530187a15feec05de2e4"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db= getFirestore()