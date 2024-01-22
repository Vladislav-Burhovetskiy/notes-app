import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUXwrg0ODQt6NJv4afubrzN-2d9xYGbqQ",
  authDomain: "react-notes-15e80.firebaseapp.com",
  projectId: "react-notes-15e80",
  storageBucket: "react-notes-15e80.appspot.com",
  messagingSenderId: "300216488491",
  appId: "1:300216488491:web:a07c3bc57a8e602bf7506e",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
