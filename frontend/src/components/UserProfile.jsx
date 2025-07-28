import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import OrderHistory from './OrderHistory';
import EditProfilePanel from './EditProfilePanel';
import FavoriteFragrances from './FavoriteFragrances';
import CompareFragrances from './CompareFragrances';
import CompanyRegistration from './CompanyRegistration';
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
                        {/* Иконка профиля */}
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
                            <path d="M22.2002 10.0635L19.0752 2.25098C19.0236 2.12211 18.928 2.01575 18.8053 1.95083C18.6826 1.88591 18.5408 1.86665 18.4053 1.89648L12.0859 3.30078V0.90625C12.0859 0.75085 12.0242 0.601814 11.9143 0.49193C11.8044 0.382045 11.6554 0.320313 11.5 0.320312C11.3446 0.320313 11.1956 0.382045 11.0857 0.49193C10.9758 0.601814 10.9141 0.75085 10.9141 0.90625V3.56152L4.3418 5.02637C4.24869 5.04705 4.16204 5.09016 4.08937 5.15193C4.0167 5.21371 3.96021 5.29229 3.9248 5.38086L0.799805 13.1934C0.772892 13.2612 0.758658 13.3333 0.757812 13.4062C0.757812 15.541 3.03418 16.3359 4.46875 16.3359C5.90332 16.3359 8.17969 15.541 8.17969 13.4062C8.17945 13.3317 8.1652 13.2578 8.1377 13.1885L5.26855 6.0166L10.9141 4.76172V17.5078H9.15625C9.00085 17.5078 8.85181 17.5695 8.74193 17.6794C8.63205 17.7893 8.57031 17.9383 8.57031 18.0938C8.57031 18.2492 8.63205 18.3982 8.74193 18.5081C8.85181 18.618 9.00085 18.6797 9.15625 18.6797H13.8438C13.9992 18.6797 14.1482 18.618 14.2581 18.5081C14.368 18.3982 14.4297 18.2492 14.4297 18.0938C14.4297 17.9383 14.368 17.7893 14.2581 17.6794C14.1482 17.5695 13.9992 17.5078 13.8438 17.5078H12.0859V4.50098L17.5752 3.28125L14.8623 10.0635C14.8348 10.1328 14.8206 10.2067 14.8203 10.2812C14.8203 12.416 17.0967 13.2109 18.5312 13.2109C19.9658 13.2109 22.2422 12.416 22.2422 10.2812C22.2419 10.2067 22.2277 10.1328 22.2002 10.0635ZM4.46875 15.1641C3.87163 15.1594 3.28504 15.0063 2.76172 14.7188C2.2373 14.4131 1.96582 14.0176 1.93262 13.5107L4.47168 7.17188L7.01074 13.5107C6.91602 14.8564 5.11133 15.1641 4.46875 15.1641ZM18.5312 12.0391C17.9341 12.0344 17.3475 11.8813 16.8242 11.5938C16.2998 11.2881 16.0283 10.8926 15.9951 10.3857L18.5342 4.04688L21.0732 10.3857C20.9785 11.7314 19.1738 12.0391 18.5312 12.0391Z" fill="#603A31" />
                        </svg>
                        COMPARE FRAGRANCES
                    </li>

                    <li className={selectedTab === "company" ? "active" : ""} onClick={() => setSelectedTab("company")}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M3 3H21V21H3V3Z" stroke="#603A31" strokeWidth="1.5" />
                            <path d="M3 9H21" stroke="#603A31" strokeWidth="1.5" />
                            <path d="M9 21V9" stroke="#603A31" strokeWidth="1.5" />
                        </svg>
                        COMPANY REGISTRATION
                    </li>

                    <li onClick={handleLogout}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M16 17L21 12L16 7V10H9V14H16V17ZM4 4H12V6H4V18H12V20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" fill="#603A31" />
                        </svg>
                        LOGOUT
                    </li>
                </ul>
            </aside>

            <main className="profile-main">
                {selectedTab === "profile" && (
                    <div className="profile-card">
                        <h1 className="profile-title">MY PROFILE</h1>
                        <div className="profile-avatar"></div>
                        <div className="profile-name">{user?.fullName || "Name Lastname"}</div>
                        <div className="profile-email">{user?.email || "youremailaddress@gmail.com"}</div>
                        <div className="profile-links">
                            <a href="#">Saved addresses ({user?.addresses?.length ?? 0})</a>
                            <a href="#">Saved payment methods ({user?.paymentMethods?.length ?? 0})</a>
                        </div>
                        <button className="profile-edit-button" onClick={() => setSelectedTab("edit")}>
                            Edit Profile
                        </button>
                    </div>
                )}

                {selectedTab === "edit" && user && (
                    <EditProfilePanel user={user} onUpdateProfile={handleUpdateProfile} />
                )}

                {selectedTab === "orders" && <OrderHistory userId={userId} />}
                {selectedTab === "favorites" && <FavoriteFragrances userId={userId} />}
                {selectedTab === "compare" && <CompareFragrances userId={userId} />}
                {selectedTab === "company" && <CompanyRegistration />}
            </main>
        </div>
    );
}

export default UserProfile;
