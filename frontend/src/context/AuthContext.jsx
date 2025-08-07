import React, { createContext, useState, useEffect, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(() => localStorage.getItem("authToken") || null);
    const [userId, setUserId] = useState(() => {
        const savedId = localStorage.getItem("userId");
        return savedId && savedId !== "undefined" ? savedId : null;
    });

    useEffect(() => {
        if (authToken) {
            localStorage.setItem("authToken", authToken);
        } else {
            localStorage.removeItem("authToken");
        }
    }, [authToken]);

    useEffect(() => {
        if (userId && userId !== "undefined") {
            localStorage.setItem("userId", userId);
        } else {
            localStorage.removeItem("userId");
        }
    }, [userId]);

    const login = (token, id) => {
        if (!id || id === "undefined") {
            console.warn("Передан неверный userId в login:", id);
            return;
        }
        setAuthToken(token);
        setUserId(String(id)); 
    };

    const logout = async () => {
        if (userId) {
            try {
                await fetch(`https://localhost:7225/api/auth/logout/${userId}`, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
                });
            } catch (error) {
                console.error("Logout error:", error);
            }
        }

        setAuthToken(null);
        setUserId(null);
        window.location.href = "/";
    };

    const isAuthenticated = !!authToken;

    return (
        <AuthContext.Provider
            value={{
                authToken,
                setAuthToken,
                userId,
                setUserId,
                login,
                logout,
                isAuthenticated,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
