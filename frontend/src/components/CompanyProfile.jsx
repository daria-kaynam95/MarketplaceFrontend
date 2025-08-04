import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import "./CompanyProfile.css";

function CompanyProfile() {
    const { authToken, userId, logout } = useAuth();
    const [company, setCompany] = useState(null);
    const [selectedTab, setSelectedTab] = useState("info");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (userId && authToken) {
            fetchCompanyProfile(userId);
        } else {
            console.error("Company ID или токен отсутствует");
            setLoading(false);
        }
    }, [userId, authToken]);

    const fetchCompanyProfile = async (id) => {
        try {
            const response = await fetch(
                `https://marketplaceapi20250628113538.azurewebsites.net/api/companies/profile/id/${id}`,
                {
                    headers: { Authorization: `Bearer ${authToken}` },
                }
            );

            if (response.ok) {
                const data = await response.json();
                setCompany(data);
            } else {
                console.error("Ошибка при получении профиля компании");
            }
        } catch (error) {
            console.error("Ошибка:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        await logout();
        window.location.href = "/signin";
    };

    if (loading) {
        return <div className="company-profile-wrapper">Загрузка профиля компании...</div>;
    }

    return (
        <div className="company-profile-wrapper">
            <aside className="company-profile-sidebar">
                <ul className="company-profile-menu">
                    <li
                        className={selectedTab === "info" ? "active" : ""}
                        onClick={() => setSelectedTab("info")}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 
                                   12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                                stroke="#603A31"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M4 20C4 16.6863 7.58172 14 12 14C16.4183 14 
                                   20 16.6863 20 20"
                                stroke="#603A31"
                                strokeWidth="1.5"
                            />
                        </svg>
                        COMPANY INFO
                    </li>

                    <li
                        className={selectedTab === "products" ? "active" : ""}
                        onClick={() => setSelectedTab("products")}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M3 3h18v4H3zM5 7v14h14V7"
                                stroke="#603A31"
                                strokeWidth="1.5"
                            />
                        </svg>
                        MY PRODUCTS
                    </li>

                    <li
                        className={selectedTab === "orders" ? "active" : ""}
                        onClick={() => setSelectedTab("orders")}
                    >
                        <svg width="24" height="24" fill="none" stroke="#603A31" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                        ORDERS
                    </li>

                    <li
                        className={selectedTab === "analytics" ? "active" : ""}
                        onClick={() => setSelectedTab("analytics")}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M4 19h16M4 15h10M4 11h7M4 7h4" stroke="#603A31" strokeWidth="1.5" />
                        </svg>
                        ANALYTICS
                    </li>
                </ul>

                <button className="logout-button" onClick={handleLogout}>
                    Logout
                </button>
            </aside>

            <main className="company-profile-content">
                <div className="placeholder-message">
                    Здесь будет отображаться выбранная вкладка: <b>{selectedTab}</b>
                </div>
            </main>
        </div>
    );
}

export default CompanyProfile;
