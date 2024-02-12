import {
    getAuth,
    onAuthStateChanged as firebaseOnAuthStateChanged,
    createUserWithEmailAndPassword as firebaseCreateUserWithEmailAndPassword,
    signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword,
    signOut as firebaseSignOut,
    signInAnonymously as firebaseSignInAnonymously
} from "firebase/auth";
import { app } from "./app";

export const auth = getAuth(app);
export const onAuthStateChanged = firebaseOnAuthStateChanged;
export const createUserWithEmailAndPassword = firebaseCreateUserWithEmailAndPassword;
export const signInWithEmailAndPassword = firebaseSignInWithEmailAndPassword;
export const signOut = firebaseSignOut;
export const signInAnonymously = firebaseSignInAnonymously;