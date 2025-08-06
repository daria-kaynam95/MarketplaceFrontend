import React, { createContext, useState, useEffect, useContext } from "react";

const CompanyAuthContext = createContext();

export const CompanyAuthProvider = ({ children }) => {
    const [companyToken, setCompanyToken] = useState(() => {
        const token = localStorage.getItem("companyToken");
        return token && token !== "null" && token !== "undefined" ? token : null;
    });


    const [company, setCompany] = useState(() => {
        const storedCompany = localStorage.getItem("company");
        return storedCompany ? JSON.parse(storedCompany) : null;
    });

    const [role, setRole] = useState(() => {
        const savedRole = localStorage.getItem("role");
        return savedRole && savedRole !== "null" && savedRole !== "undefined"
            ? savedRole
            : "COMPANY";
    });

    useEffect(() => {
        if (companyToken) {
            localStorage.setItem("companyToken", companyToken);
        } else {
            localStorage.removeItem("companyToken");
        }
    }, [companyToken]);

    useEffect(() => {
        if (company) {
            localStorage.setItem("company", JSON.stringify(company));
        } else {
            localStorage.removeItem("company");
        }
    }, [company]);

    useEffect(() => {
        if (role) {
            localStorage.setItem("role", role);
        } else {
            localStorage.removeItem("role");
        }
    }, [role]);

    // Изменяем login — теперь принимаем token и объект компании
    const login = (token, companyData, userRole = "COMPANY") => {
        setCompanyToken(token);
        setCompany(companyData);
        setRole(userRole);
    };

    const logout = () => {
        setCompanyToken(null);
        setCompany(null);
        setRole(null);
        localStorage.removeItem("companyToken");
        localStorage.removeItem("company");
        localStorage.removeItem("role");
    };

    const isAuthenticated = Boolean(companyToken);

    return (
        <CompanyAuthContext.Provider
            value={{ companyToken, company, role, login, logout, isAuthenticated }}
        >
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
