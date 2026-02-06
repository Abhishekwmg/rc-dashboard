import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "crm-dashboard-eb4b0.firebaseapp.com",
  projectId: "crm-dashboard-eb4b0",
  storageBucket: "crm-dashboard-eb4b0.firebasestorage.app",
  messagingSenderId: "759492045227",
  appId: "1:759492045227:web:41d49ee50fbb1d4f5e8aee",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
