import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCn6vFqT3cCx7gaRrR1WQcVNs1AffdFpU",
  authDomain: "cabsy-live.firebaseapp.com",
  projectId: "cabsy-live",
  storageBucket: "cabsy-live.appspot.com",
  messagingSenderId: "427094752756",
  appId: "1:427094752756:web:dc7f12efbafe11da2d8da1",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
