import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { collection, doc, setDoc, } from "firebase/firestore";

const getUser = createContext();

export const useTheContext = () => {
  const context = useContext(getUser);
  return context;
};

export function ProviderContext({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [userAutentication, setUserAutentication] = useState(null);
  const [loading, setLoading] = useState(true);
  const [uuidUser, setUuidUser] = useState('')

  const signUp = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
     
  };


  const logAuth = async () => {
    await signOut(auth);
    navigate("/");
  };
  const login = async (email, password) => {
    const userCredentials = await signInWithEmailAndPassword( auth, email, password );
    console.log(userCredentials);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUserAutentication(currentUser);
      setLoading(false);
      console.log(currentUser);
      setUuidUser(currentUser.uid);
      addUserToCollect(currentUser.email, currentUser.uid);
    });
  }, []);
  

  const [cartUser, setCartUser] = useState([])

  const addUserToCollect = async (email, uid) => {
    const docRef = doc(db, 'Users', uid);
    const payload = {email, cartUser};
    await setDoc(docRef, payload)
  }



  return (
    <getUser.Provider
      value={{
        signUp,
        login,
        user,
        setUser,
        userAutentication,
        logAuth,
        loading,
        uuidUser,
      }}
    >
      {children}
    </getUser.Provider>
  );
}
