import {createContext, useContext, useState} from "react";

const activeLinkContext = createContext();
export const useActiveLinkContext = () => useContext(activeLinkContext);

export const ActiveLinkProvider = ({children}) => {
    const [activeLink, setActiveLink] = useState('/');
    const values = {
        activeLink,
        setActiveLink
    };
    return <activeLinkContext.Provider value={values}>
        {children}
    </activeLinkContext.Provider>
}