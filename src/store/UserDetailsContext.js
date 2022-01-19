import React, { useState } from "react";

const UserDetailsContext = React.createContext({
    response : {},
    setResponse : () => {},
    loader : false,
    setLoader : () => {}
});


export const UserDetailsContextProvider = (props) => {
    const [response, setResponse] = useState({});
    const [loader, upsetLoader] = useState(false);
    const updateResponse = (val) => {
        setResponse(val);
    }

    const upadateLoader = (val) => {
        upsetLoader(val);
    }

    return (
        <UserDetailsContext.Provider value={{
            response : response,
            setResponse : updateResponse,
            loader : loader,
            setLoader: upadateLoader,
        }}>
        {props.children}
        </UserDetailsContext.Provider>
    )
} 

export default UserDetailsContext;