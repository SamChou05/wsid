import {getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSTSZxoxJT12w6YrQkjASzUFwYAbkXIW4",
  authDomain: "wsid-d685e.firebaseapp.com",
  projectId: "wsid-d685e",
  storageBucket: "wsid-d685e.appspot.com",
  messagingSenderId: "446310756870",
  appId: "1:446310756870:web:02a6acf5428e3d982b0987"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app); 

export { db };