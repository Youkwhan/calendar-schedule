// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxGArse3-98x5vaww9oVLHov7yP0vmVQs",
  authDomain: "calendar-schedule-35a3f.firebaseapp.com",
  projectId: "calendar-schedule-35a3f",
  storageBucket: "calendar-schedule-35a3f.appspot.com",
  messagingSenderId: "306098847549",
  appId: "1:306098847549:web:119a919345d44670774f54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);


