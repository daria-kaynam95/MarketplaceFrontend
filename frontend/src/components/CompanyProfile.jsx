import React, { useState } from "react";
import CompanyProducts from "./CompanyProducts";
import { useCompanyAuth } from "../context/CompanyAuthContext";
import "./CompanyProfile.css";

function CompanyProfile() {
    const { company, logout } = useCompanyAuth(); // получаем объект компании и функцию выхода из контекста
    const [selectedTab, setSelectedTab] = useState("info");

    const handleLogout = () => {
        logout();
        window.location.href = "/signin";
    };

    return (
        <div className="company-profile-wrapper">
            <aside className="company-profile-sidebar">
                <ul className="company-profile-menu">
                    <li
                        className={selectedTab === "info" ? "active" : ""}
                        onClick={() => setSelectedTab("info")}
                    >
                        COMPANY INFO
                    </li>

                    <li
                        className={selectedTab === "products" ? "active" : ""}
                        onClick={() => setSelectedTab("products")}
                    >
                        MY PRODUCTS
                    </li>

                    <li
                        className={selectedTab === "orders" ? "active" : ""}
                        onClick={() => setSelectedTab("orders")}
                    >
                        ORDERS
                    </li>

                    <li
                        className={selectedTab === "analytics" ? "active" : ""}
                        onClick={() => setSelectedTab("analytics")}
                    >
                        ANALYTICS
                    </li>
                </ul>

                <button className="logout-button-company" onClick={handleLogout}>
                    Logout
                </button>
            </aside>

            <main className="company-profile-content">
                {selectedTab === "info" && (
                    <div>
                        <h2>Company Information</h2>
                        <p><b>Name:</b> {company?.name || "No name available"}</p>
                        <p><b>Description:</b> {company?.description || "No description available"}</p>
                        <p><b>Tax Number:</b> {company?.taxNumber || "No tax number available"}</p>
                        <p><b>Registration Number:</b> {company?.regNumber || "No registration number available"}</p>
                        <p><b>Email:</b> {company?.email || "No email available"}</p>
                        <p><b>Status:</b> {company?.status ?? "No status available"}</p>
                        <p><b>Created At:</b> {company?.createdAt ? new Date(company.createdAt).toLocaleString() : "No date available"}</p>
                    </div>
                )}

                {selectedTab === "products" && (
                    <CompanyProducts token={null} />
                )}

                {selectedTab === "orders" && (
                    <div>
                        <h2>Orders</h2>
                        <p>Здесь будет список заказов.</p>
                    </div>
                )}

                {selectedTab === "analytics" && (
                    <div>
                        <h2>Analytics</h2>
                        <p>Здесь будет аналитика компании.</p>
                    </div>
                )}
            </main>
        </div>
    );
}

export default CompanyProfile;
