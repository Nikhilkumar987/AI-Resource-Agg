import React, { createContext, useContext, useState } from "react";

// 1. Context name typo fixed
const ApiContext = createContext();

const ApiContextProvider = ({ children }) => {
  const [response, setResponse] = useState([]);

  return (
    <ApiContext.Provider value={{ response, setResponse }}>
      {children} 
    </ApiContext.Provider>
  );
};

const useApiContext = () => {
  const context = useContext(ApiContext);

  // 3. Error constructor fixed
  if (!context) {
    throw new Error("useApiContext must be used within an ApiContextProvider");
  }

  return context;
};

export { useApiContext, ApiContextProvider };
