import React, { createContext, useContext, useState } from "react";

const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  const [response, setResponse] = useState("");        // topic input
  const [articleList, setArticleList] = useState("");  // articles from API
  const [ytVideos,setYTVideos] = useState(""); // YouTube videos from API

  return (
    <ApiContext.Provider value={{ response, setResponse, articleList, setArticleList, ytVideos,setYTVideos }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContext = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("useApiContext must be used within an ApiContextProvider");
  }
  return context;
};
export default ApiContextProvider;