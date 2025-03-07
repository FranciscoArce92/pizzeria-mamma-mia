import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [ token, setToken ] = useState(null);
    const [ user, setUser ] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        const storedEmail = localStorage.getItem("email");
        if (storedToken) {
            setToken(storedToken);
            setUser(storedEmail);
        }
    }, []);

    const login = async (email, password) => {
        try {
            const response = await fetch ("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) throw new Error("Login failed");
            const data = await response.json();
            setToken(data.token);
            setUser(data.email);
            localStorage.setItem("token", data.token);
            localStorage.setItem("email", data.email);
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    const register = async (email, password) => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) throw new Error("Registration failed");
            const data = await response.json();
            setToken(data.token);
            setUser(data.email);
            localStorage.setItem("token", data.token);
            localStorage.setItem("email", data.email);
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        navigate("/login");
    }

    const getProfile = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/me", {
                method: "GET",
                headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}`}
            });
            if (!response.ok) throw new Error("Failed to get profile");
            return await response.json();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <UserContext.Provider value={{ token, user, register, login, logout, getProfile }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);