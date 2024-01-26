// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAbwYPDFNdyFtU8XWfrY5zygqfS_aiDuY",
  authDomain: "simp-df951.firebaseapp.com",
  projectId: "simp-df951",
  storageBucket: "simp-df951.appspot.com",
  messagingSenderId: "548481736409",
  appId: "1:548481736409:web:01ebbd7ed56b2e4b5728c8",
  measurementId: "G-S0GX2H3LS3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);