import { createContext, useContext, useState } from "react";

const InfoContext = createContext();

const useInfo = () => useContext(InfoContext);

const InfoProvider = ({ children }) => {
  const [name, setName] = useState(null);
  const [focus, setFocus] = useState(null);

  return (
    <InfoContext.Provider value={{ name, setName, focus, setFocus }}>
      {children}
    </InfoContext.Provider>
  );
};

export { InfoProvider, useInfo };
