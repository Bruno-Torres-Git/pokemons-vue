import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBKbM8HP7ivah0om8EfF4jHej8W8oRiRUw",
  authDomain: "pokemons-f83ba.firebaseapp.com",
  projectId: "pokemons-f83ba",
  storageBucket: "pokemons-f83ba.appspot.com",
  messagingSenderId: "893101229199",
  appId: "1:893101229199:web:4371167e2132278ec0dcfa"
  };

firebase.initializeApp(firebaseConfig);

export const fb = firebase;
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();