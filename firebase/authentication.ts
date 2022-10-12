import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInAnonymously,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import firebase from "./firebase";

export const auth = getAuth(firebase);

export const currentUser = () => {
  return onAuthStateChanged(auth, (user) => {
    // FIXME: I do not know if this is what we need to do...
    return user;
  });
};

export const signInWithGoogle = () =>
  signInWithPopup(auth, new GoogleAuthProvider());

export const signInAnonymous = () => signInAnonymously(auth);

export const logOut = () => signOut(auth);
