// import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDGtndUx8HgUz3KSBUpbBA43Mx2IxR4Mws",
    authDomain: "chatapp-4e93c.firebaseapp.com",
    projectId: "chatapp-4e93c",
    storageBucket: "chatapp-4e93c.appspot.com",
    messagingSenderId: "1011582284283",
    appId: "1:1011582284283:web:71284a2797fbdee704db5e",
    measurementId: "G-CC4259NEE8"
})

const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth }
