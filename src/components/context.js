// Context.js
import { createContext, useContext, useRef } from "react";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const boardCountsRef = useRef({
    COMPLETE: 0,
    TODO: 0,
    IN_PROGRESS: 0,
  });

  const staticVariableRef = useRef(null);

  return (
    <MyContext.Provider value={{ boardCountsRef, staticVariableRef }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
