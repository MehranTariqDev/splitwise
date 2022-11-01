import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBR6gzUDUjnXypzRDdPWrtlxqd1a25Qnrc",
  authDomain: "splitwise-611b9.firebaseapp.com",
  projectId: "splitwise-611b9",
  storageBucket: "splitwise-611b9.appspot.com",
  messagingSenderId: "931163979520",
  appId: "1:931163979520:web:6300b9e2ee1fd882967de5"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
