
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCYPuNL1-flLSWus5rCS9-pNdqG-Moz_uo",
  authDomain: "linked-list-2f72e.firebaseapp.com",
  projectId: "linked-list-2f72e",
  storageBucket: "linked-list-2f72e.appspot.com",
  messagingSenderId: "568235961293",
  appId: "1:568235961293:web:8d9d09e48441d02e743284"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage()