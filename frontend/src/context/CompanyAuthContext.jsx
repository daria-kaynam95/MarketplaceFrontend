import React, { createContext, useState, useEffect, useContext } from "react";

const CompanyAuthContext = createContext();

export const CompanyAuthProvider = ({ children }) => {
    const [companyToken, setCompanyToken] = useState(localStorage.getItem("companyToken") || null);
    const [companyId, setCompanyId] = useState(localStorage.getItem("companyId") || null);

    useEffect(() => {
        if (companyToken) {
            localStorage.setItem("companyToken", companyToken);
        } else {
            localStorage.removeItem("companyToken");
        }
    }, [companyToken]);

    useEffect(() => {
        if (companyId) {
            localStorage.setItem("companyId", companyId);
        } else {
            localStorage.removeItem("companyId");
        }
    }, [companyId]);

    const login = (token, id) => {
        setCompanyToken(token);
        setCompanyId(id);
    };

    const logout = () => {
        setCompanyToken(null);
        setCompanyId(null);
    };

    const isAuthenticated = !!companyToken;

    return (
        <CompanyAuthContext.Provider value={{ companyToken, companyId, login, logout, isAuthenticated }}>
            {children}
        </CompanyAuthContext.Provider>
    );
};

export const useCompanyAuth = () => {
    const context = useContext(CompanyAuthContext);
    if (!context) {
        throw new Error("useCompanyAuth must be used within a CompanyAuthProvider");
    }
    return context;
};
