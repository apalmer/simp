import {
    getAuth,
    onAuthStateChanged as firebaseOnAuthStateChanged,
    createUserWithEmailAndPassword as firebaseCreateUserWithEmailAndPassword,
    signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword,
    signOut as firebaseSignOut
} from "firebase/auth";
import { app } from "./app";

export const auth = getAuth(app);
export const onAuthStateChanged = firebaseOnAuthStateChanged;
export const createUserWithEmailAndPasswordf = firebaseCreateUserWithEmailAndPassword;
export const signInWithEmailAndPasswordf = firebaseSignInWithEmailAndPassword;
export const signOutf = firebaseSignOut;