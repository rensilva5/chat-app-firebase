import { Button, Input } from "@mui/material";
import React, { useRef, useState } from "react";
import { auth, db } from "../firebase";
import firebase from "firebase/compat/app";
import Webcam from "react-webcam";

function SendMessage({ scroll }) {
  const [msg, setMsg] = useState("");
  const [image, setImage] = useState(null);
  const [showWebcam, setShowWebcam] = useState(false);
  const webcamRef = useRef(null);

  async function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    if (image) {
      const imageRef = firebase.storage().ref(`images/${image.name}`);
      await imageRef.put(image);
      const imageUrl = await imageRef.getDownloadURL();

      await db.collection("messages").add({
        text: msg,
        photoURL: imageUrl,
        uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setImage(null);
    } else {
      await db.collection("messages").add({
        text: msg,
        photoURL,
        uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    setMsg("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }
  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    setShowWebcam(false);
  };

  return (
    <div>
      <form onSubmit={sendMessage}>
        <Input
          placeholder="Type here"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        ></Input>
        <Input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          accept="image/*"
        />

        {showWebcam && (
          <div>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
            />
            <Button type="button" onClick={captureImage}>
              Capture
            </Button>
          </div>
        )}

        <Button type="button" onClick={() => setShowWebcam(!showWebcam)}>
          {showWebcam ? "Cancel" : "Open Webcam"}
        </Button>
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
}

export default SendMessage;
