import
    {
        getAuth,
        GoogleAuthProvider,
        onAuthStateChanged,
        signInWithPopup,
        signOut
    } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      console.log(result.user);
      setUser(result.user);
    });
  };

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return {
    user,
    signInUsingGoogle,
    logOut,
  };
};

export default useFirebase;
