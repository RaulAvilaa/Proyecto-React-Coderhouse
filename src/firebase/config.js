// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjy5CGKeifT5sg5lR93GL6mynaV-8cHtU",
    authDomain: "proyecto-react-coderhous-40aec.firebaseapp.com",
    projectId: "proyecto-react-coderhous-40aec",
    storageBucket: "proyecto-react-coderhous-40aec.appspot.com",
    messagingSenderId: "57736265189",
    appId: "1:57736265189:web:5e60ae2f58a90f2e80030c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore ( app )  
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();