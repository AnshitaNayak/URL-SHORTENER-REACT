import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react';

const ContextApi = createContext();

export const ContextProvider = ({ children }) => {
    /* ---------- Before

        1. After login → redirect to dashboard
        2. Context token = "" (not yet updated)
        3. Dashboard API → fails
        4. After page refresh → token loaded from localStorage → works ---------- */

    // const getToken = localStorage.getItem("JWT_TOKEN")
    //     ? JSON.parse(localStorage.getItem("JWT_TOKEN"))
    //     : null;
    // const [token, setToken] = useState(getToken);


    /* ---------- After

        1. App loads → context automatically loads token from localStorage
        2. Dashboard ALWAYS receives correct token
        3. No more needing page refresh  ---------- */



    const [token, setToken] = useState("");

    // Load token from localStorage ONCE when the app starts, thats why passed [] in useEffect
    useEffect(() => {
        const savedToken = JSON.parse(localStorage.getItem("JWT_TOKEN"));
        if (savedToken) {
            setToken(savedToken);
        }
    }, []);

    const sendData = {
        token,
        setToken,
    };

    return <ContextApi.Provider value={sendData}>
        {children}
    </ContextApi.Provider>
};

export const useStoreContext = () => {
    const context = useContext(ContextApi);
    return context;
}