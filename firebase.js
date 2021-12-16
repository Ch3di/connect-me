import { initializeApp } from "firebase/app";
// import * as firebase from "firebase";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "REDACTED",
  projectId: "REDACTED",
  storageBucket: REDACTED,
  messagingSenderId: "REDACTED",
  appId: REDACTED
};

initializeApp(firebaseConfig);
// const db = app.firestore();
const auth = getAuth();
const firestore = getFirestore();

export { auth, firestore };
