import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  signInWithPhoneNumber,
  RecaptchaVerifier

} from "firebase/auth";
import { auth } from "../Firebase-Config";


const userAuthContext = createContext();

export function UserContext({ children }) {
  const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
   const googleAuthProvider= new   GoogleAuthProvider();
     return signInWithPopup(auth,googleAuthProvider)
  }

  function forgetPass(email) {
    return sendPasswordResetEmail(auth,email);
  } 

  function signinPhone(numValue) {
    
    const recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});
    recaptchaVerifier.render()
        return signInWithPhoneNumber(auth,numValue,recaptchaVerifier);
  } 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, signinPhone, logIn, signUp, logOut ,googleSignIn,forgetPass}}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
