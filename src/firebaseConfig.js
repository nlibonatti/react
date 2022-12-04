import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB30sHWT77jfjNMesUzChYkiiv1qncc334",
  authDomain: "ecomm-crypto.firebaseapp.com",
  projectId: "ecomm-crypto",
  storageBucket: "ecomm-crypto.appspot.com",
  messagingSenderId: "829017340288",
  appId: "1:829017340288:web:f8b530e4673825e5516965"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);