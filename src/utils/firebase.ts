import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC4OStPVSut9rrLD60_O12z2CCpw055ZDk",
  authDomain: "code-rush-6780f.firebaseapp.com",
  projectId: "code-rush-6780f",
  storageBucket: "code-rush-6780f.appspot.com",
  messagingSenderId: "923218182104",
  appId: "1:923218182104:web:4a6b1984f2f1b4df23bcad",
  measurementId: "G-W1LXMKFB1X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);