import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "REDACTED",
  authDomain: "REDACTED",
  projectId: "REDACTED",
  storageBucket: REDACTED,
  messagingSenderId: "REDACTED",
  appId: REDACTED
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
