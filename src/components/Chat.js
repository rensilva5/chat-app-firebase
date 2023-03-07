import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import SignOut from './SignOut'

function Chat() {
    const [messages, setMessages] = useState([])
    useEffect(() => {
        db.collection('messages').orderBy("createdAt").limit(30).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
  return (
    <div>
        <SignOut />
        <div>
        {messages.map(({ id, text, photoURL }) => (
            <div>
                <div key={id}>
                    <img src={photoURL} alt="" />
                    <p>{text}</p>
                </div>
            </div>
        ))}
    </div>
    
    </div>
  )
}

export default Chat




// import { useState } from 'react';
// import { useCollectionData } from 'react-firebase-hooks/firestore';
// // import firebase from 'firebase/app';
// import 'firebase/firestore';

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// const firestore = firebase.firestore();

// function Chat() {
//   const [text, setText] = useState('');
//   const messagesRef = firestore.collection('messages');
//   const query = messagesRef.orderBy('createdAt').limit(25);
//   const [messages] = useCollectionData(query, { idField: 'id' });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { uid, photoURL } = firebase.auth().currentUser;
//     await messagesRef.add({
//       text,
//       createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//       uid,
//       photoURL,
//     });
//     setText('');
//   };

//   return (
//     <>
//       <div>
//         <h1>Hoiii</h1>
//         {messages &&
//           messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
//       </div>
//       <form onSubmit={handleSubmit}>
//         <input
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           placeholder="Type a message"
//         />
//         <button type="submit">Send</button>
//       </form>
//     </>
//   );
// }

// function ChatMessage({ message }) {
//   const { text, uid, photoURL } = message;

//   return (
//     <div>
//       {photoURL && <img src={photoURL} alt="avatar" />}
//       <p>{text}</p>
//     </div>
//   );
// }

// export default Chat;
