import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

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
  const [loading, setLoading] = useState(true)

  const signUp = async (email, password) =>
    await createUserWithEmailAndPassword(auth, email, password);
  const logAuth = async () => {
    await signOut(auth);
    navigate("/");
  };
  const login = async (email, password) => {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUserAutentication(currentUser);
      setLoading(false)
    });
  }, []);

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
      }}
    >
      {children}
    </getUser.Provider>
  );
}
