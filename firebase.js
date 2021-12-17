import { initializeApp } from "firebase/app";
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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
