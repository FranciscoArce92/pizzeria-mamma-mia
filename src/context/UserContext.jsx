import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [ token, setToken ] = useState(true);

    const login = () => setToken(true);
    const logout = () => setToken(false);

    return (
        <UserContext.Provider value={{ token, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};