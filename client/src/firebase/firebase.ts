import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// ! Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
};

// ! Initialize Firebase
// const app = initializeApp(firebaseConfig);

const firebase = initializeApp(firebaseConfig);
const app = getAuth(firebase);

export default app;