import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCIQCthjJZ27__8z0qhVoLb-2KWYqRGdQ",
  authDomain: "sampleproject-1-f2a04.firebaseapp.com",
  projectId: "sampleproject-1-f2a04",
  storageBucket: "sampleproject-1-f2a04.firebasestorage.app",
  messagingSenderId: "533683576642",
  appId: "1:533683576642:web:de25fefdbf6fdcc349b2db",
  measurementId: "G-KW7SG8DERP"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

export default app;
