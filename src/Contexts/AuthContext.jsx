import { createContext, useContext, useState } from "react";
import { loginService } from "../services/login-service";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(()=>{
        const token = localStorage.getItem('token');
        const userData = localStorage.getItem('user');
        return token && userData ? {...JSON.parse(userData), token, isAuthenticated: true} : { isAuthenticated: false };

    })

    const login = async (credentials) => {
        try {
            const response = await loginService.loginUser(credentials);
            console.log("Login response:", response);
            localStorage.setItem('token', response.data.access_token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            setUser({   ...response.data.user, token: response.data.access_token, isAuthenticated: true });
        }catch (error) {
            throw error;
        }
    }

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser({ isAuthenticated: false });
    }


    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )


};


export const useAuth = () => useContext(AuthContext);