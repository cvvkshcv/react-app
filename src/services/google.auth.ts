import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  browserSessionPersistence,
  inMemoryPersistence,
  browserLocalPersistence,
  getIdToken,
} from "firebase/auth";
// import { getAnalytics, logEvent } from "firebase/analytics";

// insted of process.env -> import.meta should be used for vite
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_GOOGLE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_GOOGLE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_GOOGLE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_GOOGLE_MESSEGING_SENDING_ID,
  appId: import.meta.env.VITE_REACT_APP_GOOGLE_APP_ID,
  measurementId: import.meta.env.VITE_REACT_APP_GOOGLE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// logEvent(analytics, 'notification_received');

const auth = getAuth(app);
auth.setPersistence(browserSessionPersistence);
auth.setPersistence(inMemoryPersistence);
auth.setPersistence(browserLocalPersistence);
const provider = new GoogleAuthProvider();

export const googleAuth = { app, auth, provider, getIdToken };
