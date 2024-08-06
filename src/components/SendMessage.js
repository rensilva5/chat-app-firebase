import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import { auth, db } from "../firebase";
import firebase from "firebase/compat/app";

function SendMessage({ scroll }) {
  const [msg, setMsg] = useState("");

  async function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await db.collection("messages").add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMsg("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <Input
          placeholder="Type here"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        ></Input>
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
}

export default SendMessage;
