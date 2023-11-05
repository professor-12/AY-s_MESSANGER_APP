// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvzyi4L8MtlkiRgK4BXR3DR8-4q6EAyb0",
    authDomain: "chatapi-5170c.firebaseapp.com",
    projectId: "chatapi-5170c",
    storageBucket: "chatapi-5170c.appspot.com",
    messagingSenderId: "841614176467",
    appId: "1:841614176467:web:85420796895bc1e9652426",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)