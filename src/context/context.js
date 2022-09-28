import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

const getUser = createContext();

export const useTheContext = () => {
  const context = useContext(getUser);
  return context;
};

export function ProviderContext({ children }) {
  const credentiales = {
    mail: null,
    password: null,
  };

  const signUp =  (email, password) =>  createUserWithEmailAndPassword(auth, email, password);

  return (
    <getUser.Provider value={{ credentiales, signUp }}>
      {children}
    </getUser.Provider>
  );
}
