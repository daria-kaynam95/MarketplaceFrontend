import React, { createContext, useState, useEffect, useContext } from "react";

// Создаём контекст авторизации
export const AuthContext = createContext();

// Провайдер, оборачивающий приложение
export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(localStorage.getItem("authToken") || null);
    const [userId, setUserId] = useState(localStorage.getItem("userId") || null);

    // Сохраняем или удаляем токен в localStorage при изменении
    useEffect(() => {
        if (authToken) {
            localStorage.setItem("authToken", authToken);
        } else {
            localStorage.removeItem("authToken");
        }
    }, [authToken]);

    // Сохраняем или удаляем userId в localStorage при изменении
    useEffect(() => {
        if (userId) {
            localStorage.setItem("userId", userId);
        } else {
            localStorage.removeItem("userId");
        }
    }, [userId]);

    // Функция логина: сохраняем токен и id
    const login = (token, id) => {
        setAuthToken(token);
        setUserId(id);
    };

    // Функция выхода
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
        window.location.href = "/"; // редирект на главную страницу
    };

    // Вычисляем, авторизован ли пользователь
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

// Экспорт хука для использования контекста
export const useAuth = () => useContext(AuthContext);
