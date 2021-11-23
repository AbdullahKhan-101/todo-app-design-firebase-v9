import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2TQQvEswcih0Aa2mWOVQ0amAZ8tnEei4",
  authDomain: "todoappfirst-91e5c.firebaseapp.com",
  databaseURL: "https://todoappfirst-91e5c.firebaseio.com",
  projectId: "todoappfirst-91e5c",
  storageBucket: "todoappfirst-91e5c.appspot.com",
  messagingSenderId: "240637890665",
  appId: "1:240637890665:web:c5d3812d8d83d5e2ffd2f8",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
