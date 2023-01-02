// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB0QztBHBRcD267L8r0aohhCBchE_tqA9g",
    authDomain: "firestore-intro-bridgette.firebaseapp.com",
    projectId: "firestore-intro-bridgette",
    storageBucket: "firestore-intro-bridgette.appspot.com",
    messagingSenderId: "357333014536",
    appId: "1:357333014536:web:012a42dbfef9b24aca19bd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
