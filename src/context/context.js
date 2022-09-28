import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

const getUser = createContext();

export const useTheContext = () => {
  const context = useContext(getUser);
  return context;
};

export function ProviderContext({ children }) {

  const signUp =  (email, password) =>  createUserWithEmailAndPassword(auth, email, password);
  const login = (email, password) => signInWithEmailAndPassword(auth,email, password)

  return (
    <getUser.Provider value={{signUp, login }}>
      {children}
    </getUser.Provider>
  );
}
