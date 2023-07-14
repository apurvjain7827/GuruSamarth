// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7U3GBLWHf8GqKV6RdoL9QmVMtqQDy3j0",
  authDomain: "teachers-job-portal.firebaseapp.com",
  projectId: "teachers-job-portal",
  storageBucket: "teachers-job-portal.appspot.com",
  messagingSenderId: "247998761312",
  appId: "1:247998761312:web:342821dc7f3104dcb63605",
  measurementId: "G-ZDLDJS7G7F",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const fireDB = getFirestore(app);
