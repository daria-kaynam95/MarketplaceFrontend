import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import OrderHistory from './OrderHistory';
import EditProfilePanel from './EditProfilePanel';
import FavoriteFragrances from './FavoriteFragrances';
import CompareFragrances from './CompareFragrances';
import "./UserProfile.css";

function UserProfile() {
    const { authToken, userId, logout } = useAuth();
    const [user, setUser] = useState(null);
    const [selectedTab, setSelectedTab] = useState("profile");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (userId && authToken) {
            fetchUserProfile(userId);
        } else {
            console.error("User ID или токен отсутствует");
            setLoading(false);
        }
    }, [userId, authToken]);

    const fetchUserProfile = async (id) => {
        try {
            const response = await fetch(`https://marketplaceapi20250628113538.azurewebsites.net/api/users/profile/id/${id}`, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setUser(data);
            } else {
                console.error("Ошибка при получении профиля");
            }
        } catch (error) {
            console.error("Ошибка:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleUpdateProfile = async (updatedUser) => {
        try {
            const response = await fetch(`https://marketplaceapi20250628113538.azurewebsites.net/api/users/profile/id/${userId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authToken}`,
                },
                body: JSON.stringify(updatedUser),
            });

            if (response.ok) {
                const updatedData = await response.json();
                setUser(updatedData);
                setSelectedTab("profile");
            } else {
                console.error("Ошибка при обновлении профиля");
            }
        } catch (error) {
            console.error("Ошибка:", error);
        }
    };

    const handleLogout = async () => {
        await logout();
        window.location.href = "/signin";
    };

    if (loading) {
        return <div className="profile-wrapper">Загрузка профиля...</div>;
    }

    return (
        <div className="profile-wrapper">
            <aside className="profile-sidebar">
                {selectedTab === "edit" && (
                    <div
                        className="back-button"
                        onClick={() => setSelectedTab("profile")}
                        style={{ cursor: "pointer", marginBottom: "20px", color: "#731718" }}
                    >
                        &lt; Back
                    </div>
                )}

                <ul className="profile-menu">
                    <li className={selectedTab === "profile" ? "active" : ""} onClick={() => setSelectedTab("profile")}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#603A31" strokeWidth="1.5" />
                            <path d="M4 20C4 16.6863 7.58172 14 12 14C16.4183 14 20 16.6863 20 20" stroke="#603A31" strokeWidth="1.5" />
                        </svg>
                        MY PROFILE
                    </li>

                    <li className={selectedTab === "orders" ? "active" : ""} onClick={() => setSelectedTab("orders")}>
                        <svg width="24" height="24" fill="none" stroke="#603A31" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                        ORDERS HISTORY
                    </li>

                    <li className={selectedTab === "favorites" ? "active" : ""} onClick={() => setSelectedTab("favorites")}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 
                            4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 
                            14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 
                            18.6 15.36 13.45 20.04L12 21.35Z"
                                stroke="#603A31" strokeWidth="1.5" />
                        </svg>
                        FAVORITE FRAGRANCES
                    </li>

                    <li className={selectedTab === "compare" ? "active" : ""} onClick={() => setSelectedTab("compare")}>
                        <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="..." fill="#603A31" />
                        </svg>
                        COMPARE FRAGRANCES
                    </li>
                </ul>
            </aside>

            <main className="profile-content">
                {selectedTab === "profile" && <EditProfilePanel user={user} onSave={handleUpdateProfile} />}
                {selectedTab === "orders" && <OrderHistory userId={userId} />}
                {selectedTab === "favorites" && <FavoriteFragrances userId={userId} />}
                {selectedTab === "compare" && <CompareFragrances userId={userId} />}
            </main>
        </div>
    );
}

export default UserProfile;
