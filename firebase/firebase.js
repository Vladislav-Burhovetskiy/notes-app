/* 
Update firebaseConfig with your own data
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "-----",
  authDomain: "-----",
  projectId: "-----",
  storageBucket: "-----",
  messagingSenderId: "-----",
  appId: "-----",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
*/