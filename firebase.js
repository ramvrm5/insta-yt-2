// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqNJ0GAQrj0TId7Mj8JS3Jo5U6K8mT-rs",
  authDomain: "intsa-2-yt.firebaseapp.com",
  projectId: "intsa-2-yt",
  storageBucket: "intsa-2-yt.appspot.com",
  messagingSenderId: "417421916512",
  appId: "1:417421916512:web:772dde4b73ad1a5b834605"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };