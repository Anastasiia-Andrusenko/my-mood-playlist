// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATUXcfqBg3IZYQc9Q0hINGt6oVjNLoZB8",
  authDomain: "my-mood-playlist.firebaseapp.com",
  projectId: "my-mood-playlist",
  storageBucket: "my-mood-playlist.appspot.com",
  messagingSenderId: "665017246127",
  appId: "1:665017246127:web:4906d5430fcc98efe74f5a",
  measurementId: "G-D0L4JFMQSC"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };