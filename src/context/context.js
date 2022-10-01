import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { collection, doc, setDoc } from "firebase/firestore";

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
  const [uuidUser, setUuidUser] = useState("");

  const register = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
   const saveUser = onAuthStateChanged(auth, async (currentUser) => {
      console.log(currentUser)
      await addUserToCollect(currentUser.email, currentUser.uid);
    });
    saveUser();
  };

  const logAuth = async () => {
    await signOut(auth);
    navigate("/");
  };
  const login = async (email, password, user) => {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUserAutentication(currentUser);
      setLoading(false);
      setUuidUser(currentUser.uid);
    });
  }, [uuidUser]);

  const [cartUser, setCartUser] = useState([]);

  const addUserToCollect = async (email, uid) => {
      const docRef = doc(db, "Users", uid);
      const payload = { email, cartUser, uid };
      await setDoc(docRef, payload);
  };



  return (
    <getUser.Provider
      value={{
        register,
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
