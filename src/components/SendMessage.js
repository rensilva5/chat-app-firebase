import React, { useState, useRef } from "react";
import { auth, db } from "../firebase";
import firebase from "firebase/app";
import Webcam from "react-webcam";

function SendMessage({ scroll }) {
  const [msg, setMsg] = useState("");
  const [image, setImage] = useState(null);
  const [showWebcam, setShowWebcam] = useState(false);
  const webcamRef = useRef(null);

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    if (image) {
      // Upload the image to Firebase Storage and get the download URL
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
  };

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    setShowWebcam(false);
  };

  return (
    <div>
      <form onSubmit={sendMessage}>
        <input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Message"
        />

        <input
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
            <button type="button" onClick={captureImage}>
              Capture
            </button>
          </div>
        )}

        <button type="button" onClick={() => setShowWebcam(!showWebcam)}>
          {showWebcam ? "Cancel" : "Open Webcam"}
        </button>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default SendMessage;
