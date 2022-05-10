import React, { createContext, useEffect, useState } from "react";
import app from "../utils/firebase";

export const UserContext = createContext();

const AuthContext = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [pending, setPending] = useState(true);
  const [userRole, setUserRole] = useState();

  useEffect(() => {
    const unsubscribe = app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
      if (user) {
        app
          .firestore()
          .collection("users")
          .doc(`${user.uid}`)
          .get()
          .then((doc) => setUserRole(doc.data().role));
      }
    });
    return unsubscribe;
  }, []);

  if (pending) {
    return <div>Loading......</div>;
  } else {
    return (
      <UserContext.Provider value={{ user: currentUser, userRole }}>
        {children}
      </UserContext.Provider>
    );
  }
};

export default AuthContext;
