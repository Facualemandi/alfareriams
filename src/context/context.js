import { createContext, useContext } from "react";

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

  const signUp = (email, password) => {
    console.log(email, password);
  };

  return (
    <getUser.Provider value={{ credentiales, signUp }}>
      {children}
    </getUser.Provider>
  );
}
