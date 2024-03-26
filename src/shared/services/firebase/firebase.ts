import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_API_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_API_PROJECT_ID,
  storageBucket: process.env.FIREBASE_API_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_API_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_API_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app)