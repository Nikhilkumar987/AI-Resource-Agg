import React, { createContext, useContext, useState } from "react";

// 1. Create Context
const FormContext = createContext();

// 2. Provider component
export const FormContextProvider = ({ children }) => {
  const [level, setLevel] = useState('');
  const [topic, setTopic] = useState('');

  return (
    <FormContext.Provider value={{ level, setLevel, topic, setTopic }}>
      {children}
    </FormContext.Provider>
  );
};

// 3. Custom Hook
export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormContextProvider");
  }
  return context;
};
