import { useState, useEffect } from "react";
import app from "../utils/firebase";

const useStorage = (name, description, file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = app.storage().ref(file.name);
    const collectionRef = app.firestore().collection("products");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = new Date();
        await collectionRef.add({ name, description, url, createdAt });
        setUrl(url);
      }
    );
  }, [file, description, name]);

  return { progress, url, error };
};

export default useStorage;
