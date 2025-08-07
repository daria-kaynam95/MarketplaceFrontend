import React, { useState } from "react";
import CompanyProducts from "./CompanyProducts";
import { useCompanyAuth } from "../context/CompanyAuthContext";
import "./CompanyProfile.css";

function CompanyProfile() {
    const { company, logout } = useCompanyAuth();
    const [selectedTab, setSelectedTab] = useState("info");

    const handleLogout = () => {
        logout();
        window.location.href = "/signin";
    };

    return (
        <div className="company-wrapper">
            <aside className="company-sidebar">
                <ul className="company-menu">
                    <li
                        className={selectedTab === "info" ? "active" : ""}
                        onClick={() => setSelectedTab("info")}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#603A31" strokeWidth="1.5" />
                            <path d="M2 17L12 22L22 17" stroke="#603A31" strokeWidth="1.5" />
                            <path d="M2 12L12 17L22 12" stroke="#603A31" strokeWidth="1.5" />
                        </svg>
                        COMPANY INFO
                    </li>

                    <li
                        className={selectedTab === "products" ? "active" : ""}
                        onClick={() => setSelectedTab("products")}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M4 6H20M4 12H20M4 18H20" stroke="#603A31" strokeWidth="1.5" />
                        </svg>
                        MY PRODUCTS
                    </li>

                    <li
                        className={selectedTab === "orders" ? "active" : ""}
                        onClick={() => setSelectedTab("orders")}
                    >
                        <svg width="24" height="24" fill="none" stroke="#603A31" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
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
                            <path d="M3 3V21H21" stroke="#603A31" strokeWidth="1.5" />
                            <path d="M7 17L10 12L14 16L19 9" stroke="#603A31" strokeWidth="1.5" />
                        </svg>
                        ANALYTICS
                    </li>

                    <li onClick={handleLogout} style={{ cursor: 'pointer' }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#603A31" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" >
                            <path d="M16 17L21 12L16 7" />
                            <path d="M21 12H9" />
                            <path d="M12 19H7A2 2 0 0 1 5 17V7A2 2 0 0 1 7 5H12" />
                        </svg>
                        LOGOUT
                    </li>
                </ul>
            </aside>

            <main className="company-main">
                {selectedTab === "info" && (
                    <div className="company-card">
                        <div className="company-avatar"></div>
                        <div className="company-name">{company?.name || "No name available"}</div>
                        <div className="company-email">{company?.email || "No email available"}</div>
                        <div className="company-info">
                            <p><b>Description:</b> {company?.description || "No description"}</p>
                            <p><b>Tax Number:</b> {company?.taxNumber || "N/A"}</p>
                            <p><b>Registration Number:</b> {company?.regNumber || "N/A"}</p>
                            <p><b>Status:</b> {company?.status || "N/A"}</p>
                            <p><b>Created At:</b> {company?.createdAt ? new Date(company.createdAt).toLocaleString() : "No date"}</p>
                        </div>
                    </div>
                )}

                {selectedTab === "products" && (
                    <CompanyProducts token={null} />
                )}

                {selectedTab === "orders" && (
                    <div className="company-card">
                        <h2>Orders</h2>
                        <p>Здесь будет список заказов.</p>
                    </div>
                )}

                {selectedTab === "analytics" && (
                    <div className="company-card">
                        <h2>Analytics</h2>
                        <p>Здесь будет аналитика компании.</p>
                    </div>
                )}
            </main>
        </div>
    );
}

export default CompanyProfile;
