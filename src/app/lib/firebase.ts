import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// ✅ Your new Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA-3WNVbjLSqPxW3dFnG7kpqIYHjo-w8ts",
  authDomain: "journal-app-4d4bb.firebaseapp.com",
  projectId: "journal-app-4d4bb",
  storageBucket: "journal-app-4d4bb.firebasestorage.app", // double-check this – see note below
  messagingSenderId: "815962784111",
  appId: "1:815962784111:web:20392655b539134d1ae89a",
  measurementId: "G-6CBRGHV8HV"
};

// Avoid duplicate initialization
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Only run analytics in browser
if (typeof window !== "undefined") {
  getAnalytics(app);
}

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
