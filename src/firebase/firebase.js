// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC15Rn8YIZ1ZW9_F2ydsEmXlD3PgfHZsKk",
  authDomain: "alfareria-commerce.firebaseapp.com",
  projectId: "alfareria-commerce",
  storageBucket: "alfareria-commerce.appspot.com",
  messagingSenderId: "128312457139",
  appId: "1:128312457139:web:c836b75766fb3b214c7dc6",
  measurementId: "G-WBNVPBQQZ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app)
const analytics = getAnalytics(app);