// import './App.css'
import Chat from "./components/Chat";
import SignIn from "./components/SignIn";
import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

function App() {
  const [user] = useAuthState(auth)
  return (
    <>
    {user ? <Chat /> : <SignIn />}
    </>
  )
}

  export  default App;
// import React from "react";
// import './App.css'
// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// const app = initializeApp({});
// // const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// import firebase from 'firebase/app';
// import 'firebase/firestore' 
// import 'firebase/auth';


// import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from 'react-firebase-hooks/firestore';

// import { auth } from './firebase';

// use the named exports
// const auth = firebase.auth();
// const firestore = firebase.firestore();


// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//     apiKey: "AIzaSyDGtndUx8HgUz3KSBUpbBA43Mx2IxR4Mws",
//     authDomain: "chatapp-4e93c.firebaseapp.com",
//     projectId: "chatapp-4e93c",
//     storageBucket: "chatapp-4e93c.appspot.com",
//     messagingSenderId: "1011582284283",
//     appId: "1:1011582284283:web:71284a2797fbdee704db5e",
//     measurementId: "G-CC4259NEE8"
//   };
// const auth = firebase.auth();
// const firestore = firebase.firestore();

// const analytics = getAnalytics(app);

// firebaseConfig.initializeApp(firebaseConfig);

// // export const auth = firebase.auth();

// function App () {
//     const [user] = auth
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <h1>Hi there</h1>
//                 {user ? <p>Signed is as {user.email}</p> : <p>You are not signed in yet</p>}
//                 {user ? <ChatRoom /> : <SignIn />}
//             </header>
//         </div>
//     )
// }

// function SignIn()  {
//     const signInWithGoogle = () => {
        
//     }
//     return (
// <button onClick={signInWithGoogle}>Sign In With Google</button>
//     )
// }

// // function SignOut() {
// //     return auth.currentUser && (
// //         <button onClick={() => auth.signOut()}>Sign Out</button>
// //     )
// // }

// function ChatRoom() {

// }

// export default App;

// import { useEffect, useState } from 'react';
// import 'firebase/auth';
// // import { Chat } from './Chat'
// import Chat from './Chat';
// // import firebase from 'firebase/app';

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

//   const firebaseConfig = {
//     apiKey: "AIzaSyDGtndUx8HgUz3KSBUpbBA43Mx2IxR4Mws",
//     authDomain: "chatapp-4e93c.firebaseapp.com",
//     projectId: "chatapp-4e93c",
//     storageBucket: "chatapp-4e93c.appspot.com",
//     messagingSenderId: "1011582284283",
//     appId: "1:1011582284283:web:71284a2797fbdee704db5e",
//     measurementId: "G-CC4259NEE8"
// };

// firebase.initializeApp(firebaseConfig);

// // Use other Firebase services here, for example:
// const auth = firebase.auth();
// const firestore = firebase.firestore();

// function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
//       setUser(user);
//     });
//     return unsubscribe;
//   }, []);

//   const handleSignIn = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth().signInWithPopup(provider);
//   };

//   const handleSignOut = () => {
//     firebase.auth().signOut();
//   };

//   return (
//     <div>
//       {user ? (
//         <>
//           <button onClick={handleSignOut}>Sign out</button>
//           <Chat />
//         </>
//       ) : (
//         <button onClick={handleSignIn}>Sign in with Google</button>
//       )}
//     </div>
//   );
// }
