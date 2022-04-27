import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobaContextProvider = ({ children }) => {
  const [nav, isNav] = useState("");

  return (
    <GlobalContext.Provider value={{ nav, isNav }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  const globalContext = useContext(GlobalContext);
  return globalContext;
};

export default useGlobalContext;
