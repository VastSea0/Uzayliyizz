import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsPJsOcpco0hpfFJFFfSbfkcj2zgd4FhQ",
  authDomain: "uzayliyizz.firebaseapp.com",
  projectId: "uzayliyizz",
  storageBucket: "uzayliyizz.appspot.com",
  messagingSenderId: "580204478016",
  appId: "1:580204478016:web:0cc31a42a066af290e29a5",
  measurementId: "G-7R3X7ZX5DS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged };
