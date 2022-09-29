// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//Acá obtenemos la configuración para acceder a la autenticación
import {getAuth} from 'firebase/auth'
//Acá obtenemos la configuración para acceder a los datos 
import {getFirestore} from '@firebase/firestore'

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
export const auth =  getAuth(app);
export const db = getFirestore(app)
const analytics = getAnalytics(app);