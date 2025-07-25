import React, { Children, createContext, useContext, useState } from "react";

const Apicontext = createContext();

const ApiContextProvider = ({Children})=>{

    const [response,setResponse] = useState([]);

    return(
        <Apicontext.Provider value={{response,setResponse}}>
        {Children}
        </Apicontext.Provider>
    )
}

const useApiContext = ()=>
{
    const context = useContext(ApiContext);

    if(!context)
    {
        throw new error("Api error");
    }
    return context;
}

export {useApiContext,ApiContextProvider};
