import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBfZb7s0eqAt6OOMft97bAwSmi-BA4lxsc",
  authDomain: "store-c78d6.firebaseapp.com",
  projectId: "store-c78d6",
  storageBucket: "store-c78d6.appspot.com",
  messagingSenderId: "473758999875",
  appId: "1:473758999875:web:f5af42e4964cb740eb7bf6",
  measurementId: "G-NTS4HQ54J0"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };