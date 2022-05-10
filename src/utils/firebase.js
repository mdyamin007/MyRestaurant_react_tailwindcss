import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_KEY,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = firebase.initializeApp(firebaseConfig);

export const handleSignup = async (name, email, password, setError) => {
  try {
    const auth = await app
      .auth()
      .createUserWithEmailAndPassword(email, password);
    await app.firestore().collection("users").doc(`${auth.user.uid}`).set({
      name,
      email,
      role: "user",
      createdAt: new Date(),
    });
    setError(null);
  } catch (err) {
    setError(String(err));
  }
};

export const handleLogin = async (email, password, setError) => {
  try {
    await app.auth().signInWithEmailAndPassword(email, password);
    setError(null);
  } catch (e) {
    setError(String(e));
  }
};

export const handleLogout = () => {
  app.auth().signOut();
};

export default app;
