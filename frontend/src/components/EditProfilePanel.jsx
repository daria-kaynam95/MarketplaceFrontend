import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import "./EditProfilePanel.css";

// Функция для обновления accessToken
const refreshAccessToken = async () => {
    const refreshToken = localStorage.getItem("refreshToken");

    const response = await fetch("https://marketplaceapi20250628113538.azurewebsites.net/api/auth/refresh", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: refreshToken }),
    });

    if (!response.ok) {
        throw new Error("Token refresh failed");
    }

    const data = await response.json();
    localStorage.setItem("accessToken", data.accessToken);
    return data.accessToken;
};

//  Обёртка для защищённых запросов
const fetchWithAuth = async (url, options = {}) => {
    let accessToken = localStorage.getItem("accessToken");

    const buildOptions = (token) => ({
        ...options,
        headers: {
            ...(options.headers || {}),
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });

    let response = await fetch(url, buildOptions(accessToken));

    if (response.status === 401) {
        try {
            accessToken = await refreshAccessToken();
            response = await fetch(url, buildOptions(accessToken));
        } catch (e) {
            console.error("Token refresh failed:", e);
            throw e;
        }
    }

    return response;
};


const EditProfilePanel = ({ user, onUpdateProfile, onCancel }) => {
    const [firstName, setFirstName] = useState(user?.firstName || "");
    const [lastName, setLastName] = useState(user?.lastName || "");
    const [address1, setAddress1] = useState(user?.address1 || "");
    const [address2, setAddress2] = useState(user?.address2 || "");
    const [country, setCountry] = useState(user?.country || "USA");
    const [state, setState] = useState(user?.state || "");
    const [city, setCity] = useState(user?.city || "");
    const [zip, setZip] = useState(user?.zip || "");

    const [avatarPreview, setAvatarPreview] = useState(user?.avatarUrl || null);
    const [avatarFile, setAvatarFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setAvatarPreview(URL.createObjectURL(file));
            setAvatarFile(file);
        }
    };

    const uploadAvatar = async () => {
        if (!avatarFile) return null;

        const formData = new FormData();
        formData.append("image", avatarFile);

        const token = localStorage.getItem("accessToken");

        const response = await fetch("https://marketplaceapi20250628113538.azurewebsites.net/api/images/AddImage", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        });

        if (response.ok) {
            return await response.json(); // { id, url }
        }

        return null;
    };


    const handleSave = async () => {
        let updatedAvatar = {};

        if (avatarFile) {
            // Удалить старую аватарку
            if (user?.avatarId) {
                await fetch(`https://marketplaceapi20250628113538.azurewebsites.net/api/images/DeleteImage/${user.avatarId}`, {
                    method: "DELETE",
                });
            }

            // Загрузить новую
            const uploaded = await uploadAvatar();
            if (uploaded) {
                updatedAvatar.avatarId = uploaded.id;
                updatedAvatar.avatarUrl = uploaded.url;
            }
        }

        const updatedUser = {
            ...user,
            firstName,
            lastName,
            address1,
            address2,
            country,
            state,
            city,
            zip,
            ...updatedAvatar,
        };

        onUpdateProfile(updatedUser); // Отправить наверх в родителя
    };

    const PencilIcon = () => (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="edit-icon">
            <path
                d="M12.4512 6.02483L13.0306 5.44545C13.4915 4.98455 13.7504 4.35944 13.7504 3.70764C13.7504 3.05583 13.4915 2.43072 13.0306 1.96983C12.5697 1.50893 11.9446 1.25 11.2928 1.25C10.641 1.25 10.0159 1.50893 9.555 1.96983L8.97562 2.5492L3.64937 7.8742C3.28875 8.23545 3.10812 8.41608 2.95312 8.61483C2.77024 8.8495 2.61329 9.10327 2.485 9.3717C2.37687 9.5992 2.29625 9.8417 2.135 10.3255L1.45125 12.3761M12.4512 6.02483C12.4512 6.02483 11.2206 5.95233 10.1344 4.86608C9.04812 3.78045 8.97625 2.5492 8.97625 2.5492M12.4512 6.02483L7.12562 11.3498C6.765 11.7105 6.58437 11.8911 6.38562 12.0461C6.15095 12.229 5.89718 12.3859 5.62875 12.5142C5.40125 12.6223 5.15937 12.703 4.675 12.8642L2.62437 13.548M2.62437 13.548L2.12312 13.7155C2.00628 13.7546 1.88083 13.7604 1.76086 13.7322C1.6409 13.704 1.53118 13.6429 1.44404 13.5558C1.3569 13.4686 1.29579 13.3589 1.26759 13.239C1.23938 13.119 1.24519 12.9935 1.28437 12.8767L1.45187 12.3755L2.62437 13.548Z"
                stroke="#731718"
                strokeWidth="1.5"
            />
        </svg>
    );

    return (
        <div className="edit-profile-wrapper">
            <div className="panel-wrapper">
                <h1 className="edit-profile-title">EDIT PROFILE</h1>
                <p className="edit-profile-subtitle" onClick={onCancel} style={{ cursor: "pointer" }}>
                    Go Back To Profile
                </p>

                <div className="edit-profile-content">
                    {/* Левая колонка */}
                    <div className="left-column">
                        <div className="profile-photo">
                            <label htmlFor="avatar-upload">
                                {avatarPreview ? (
                                    <img src={avatarPreview} alt="Avatar" className="avatar-preview" />
                                ) : (
                                    <div className="profile-photo-icon">
                                        <FaUser />
                                    </div>
                                )}
                            </label>
                            <input
                                type="file"
                                id="avatar-upload"
                                style={{ display: "none" }}
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                            <p className="change-photo-btn">Change Profile Photo</p>
                        </div>

                        <div className="form-group short-field">
                            <label className="label">First Name:</label>
                            <div className="input-container">
                                <input
                                    type="text"
                                    placeholder="UserFirstName"
                                    className="input"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <PencilIcon />
                            </div>
                        </div>

                        <div className="form-group short-field">
                            <label className="label">Last Name:</label>
                            <div className="input-container">
                                <input
                                    type="text"
                                    placeholder="UserLastName"
                                    className="input"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                                <PencilIcon />
                            </div>
                        </div>

                        <div className="form-group static-group">
                            <span className="label-inline">Email:</span>
                            <span className="static-inline">{user?.email || "email@example.com"}</span>
                            <div className="static-hint">Email used for login can’t be changed</div>
                        </div>

                        <div className="form-group static-group">
                            <span className="label-inline">Phone Number:</span>
                            <span className="static-inline">{user?.phone || "+1 (000)-000-00"}</span>
                            <div className="static-hint">Phone number used for login can’t be changed</div>
                        </div>

                        <button className="save-button" onClick={handleSave}>
                            Save Changes
                        </button>
                    </div>

                    {/* Правая колонка */}
                    <div className="right-column">
                        <div className="address-header">
                            <p>Addresses (1)</p>
                            <span className="add-address">+ Add</span>
                        </div>

                        <p>Default Address</p>

                        <div className="form-group">
                            <label className="label">Address Line 1:</label>
                            <div className="input-container">
                                <input
                                    type="text"
                                    placeholder="123 Madison Avenue"
                                    className="input long-field"
                                    value={address1}
                                    onChange={(e) => setAddress1(e.target.value)}
                                />
                                <PencilIcon />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="label">Address Line 2:</label>
                            <div className="input-container">
                                <input
                                    type="text"
                                    placeholder="Apt E5"
                                    className="input long-field"
                                    value={address2}
                                    onChange={(e) => setAddress2(e.target.value)}
                                />
                                <PencilIcon />
                            </div>
                        </div>

                        <div className="flex-row">
                            <div className="form-group short-field country-field">
                                <label className="label">Country:</label>
                                <div className="input-container">
                                    <select
                                        className="select"
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                    >
                                        <option>USA</option>
                                        <option>Canada</option>
                                        <option>Germany</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group short-field state-field">
                                <label className="label">State:</label>
                                <div className="input-container">
                                    <input
                                        type="text"
                                        placeholder="NY"
                                        className="input"
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex-row">
                            <div className="form-group short-field city-field">
                                <label className="label">City:</label>
                                <div className="input-container">
                                    <input
                                        type="text"
                                        placeholder="New York"
                                        className="input"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                    />
                                    <PencilIcon />
                                </div>
                            </div>

                            <div className="form-group short-field zip-field">
                                <label className="label">ZIP / Postal Code:</label>
                                <div className="input-container">
                                    <input
                                        type="text"
                                        placeholder="12345"
                                        className="input"
                                        value={zip}
                                        onChange={(e) => setZip(e.target.value)}
                                    />
                                    <PencilIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfilePanel;
