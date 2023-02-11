// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDfRHjV5l_bsjND6VIRgroRX0LmI-aFKcM",
    authDomain: "payndar-67a04.firebaseapp.com",
    projectId: "payndar-67a04",
    storageBucket: "payndar-67a04.appspot.com",
    messagingSenderId: "889796827395",
    appId: "1:889796827395:web:89bd73e5d94aed0cacf136",
    measurementId: "G-4BJKGNQ5V3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)