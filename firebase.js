import { initializeApp } from "firebase/app";
// import * as firebase from "firebase";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "connect-me-8d27b.firebaseapp.com",
  projectId: "connect-me-8d27b",
  storageBucket: "connect-me-8d27b.appspot.com",
  messagingSenderId: "486511477203",
  appId: "1:486511477203:web:dcc91ce684a107bff02f26"
};

initializeApp(firebaseConfig);
// const db = app.firestore();
const auth = getAuth();
const firestore = getFirestore();

export { auth, firestore };
