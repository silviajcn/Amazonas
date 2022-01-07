import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjmRlkuRjOK4DfCmSQFD8vNLpclzExTDI",
  authDomain: "spring3-a9826.firebaseapp.com",
  projectId: "spring3-a9826",
  storageBucket: "spring3-a9826.appspot.com",
  messagingSenderId: "475540427197",
  appId: "1:475540427197:web:ab60d5a9713255ee6c82d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();

export {
    app,
    google
}