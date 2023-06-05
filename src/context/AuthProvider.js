import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(true);
    const [userReady, setUserReady] = useState(false)
    const [profile, setProfile] = useState({});
    return (
        <AuthContext.Provider value={{ auth, setAuth, userReady, setUserReady, profile, setProfile }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;