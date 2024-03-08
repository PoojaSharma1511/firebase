import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  // apiKey: "AIzaSyBjcKHA7f0xfqCB08gjqrtTI8yJcpWR6XI",
  // authDomain: "auth-admin-9f547.firebaseapp.com",
  // databaseURL: "https://auth-admin-9f547-default-rtdb.firebaseio.com",
  // projectId: "auth-admin-9f547",
  // storageBucket: "auth-admin-9f547.appspot.com",
  // messagingSenderId: "110210154564",
  // appId: "1:110210154564:web:1e51678aea0b96b7c03c11",
  // measurementId: "G-EPJXK8TPTl"
  apiKey: "AIzaSyCRBob3kbB1p-fRqlw5x-O_rYl-H77bxDE",
  authDomain: "newpro-2f40b.firebaseapp.com",
  projectId: "newpro-2f40b",
  storageBucket: "newpro-2f40b.appspot.com",
  messagingSenderId: "134426279440",
  appId: "1:134426279440:web:e8c86067fc29e7ea805495"
};

export const app = initializeApp(firebaseConfig);
export const auth= getAuth();
 export const db = getFirestore(app)