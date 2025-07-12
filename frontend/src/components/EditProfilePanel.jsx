import React from "react";
import { FaUser } from "react-icons/fa";
import "./EditProfilePanel.css";

const EditProfilePanel = () => {
    const PencilIcon = () => (
        <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="edit-icon"
        >
            <path
                d="M12.4512 6.02483L13.0306 5.44545C13.4915 4.98455 13.7504 4.35944 13.7504 3.70764C13.7504 3.05583 13.4915 2.43072 13.0306 1.96983C12.5697 1.50893 11.9446 1.25 11.2928 1.25C10.641 1.25 10.0159 1.50893 9.555 1.96983L8.97562 2.5492L3.64937 7.8742C3.28875 8.23545 3.10812 8.41608 2.95312 8.61483C2.77024 8.8495 2.61329 9.10327 2.485 9.3717C2.37687 9.5992 2.29625 9.8417 2.135 10.3255L1.45125 12.3761M12.4512 6.02483C12.4512 6.02483 11.2206 5.95233 10.1344 4.86608C9.04812 3.78045 8.97625 2.5492 8.97625 2.5492M12.4512 6.02483L7.12562 11.3498C6.765 11.7105 6.58437 11.8911 6.38562 12.0461C6.15095 12.229 5.89718 12.3859 5.62875 12.5142C5.40125 12.6223 5.15937 12.703 4.675 12.8642L2.62437 13.548M2.62437 13.548L2.12312 13.7155C2.00628 13.7546 1.88083 13.7604 1.76086 13.7322C1.6409 13.704 1.53118 13.6429 1.44404 13.5558C1.3569 13.4686 1.29579 13.3589 1.26759 13.239C1.23938 13.119 1.24519 12.9935 1.28437 12.8767L1.45187 12.3755L2.62437 13.548Z"
                stroke="#731718"
                strokeWidth="1.5"
            />
        </svg>
    );

    return (
        <div className="edit-profile-container">
            <div className="panel-wrapper">
                <h1 className="edit-profile-title">EDIT PROFILE</h1>
                <p className="edit-profile-subtitle">Go Back To Profile</p>

                <div className="edit-profile-content">
                    {/* Левая колонка */}
                    <div className="left-column">
                        <div className="profile-photo">
                            <div className="profile-photo-icon">
                                <FaUser />
                            </div>
                            <p className="change-photo-btn">Change Profile Photo</p>
                        </div>

                        <div className="form-group short-field">
                            <label className="label">First Name:</label>
                            <div className="input-container">
                                <input type="text" placeholder="UserFirstName" className="input" />
                                <PencilIcon />
                            </div>
                        </div>

                        <div className="form-group short-field">
                            <label className="label">Last Name:</label>
                            <div className="input-container">
                                <input type="text" placeholder="UserLastName" className="input" />
                                <PencilIcon />
                            </div>
                        </div>

                        <div className="form-group static-group">
                            <span className="label-inline">Email:</span>
                            <span className="static-inline">youremailaddress@gmail.com</span>
                            <div className="static-hint">Email used for login can’t be changed</div>
                        </div>

                        <div className="form-group static-group">
                            <span className="label-inline">Phone Number:</span>
                            <span className="static-inline">+1 (000)-000-00</span>
                            <div className="static-hint">Phone number used for login can’t be changed</div>
                        </div>

                        <button className="save-button">Save Changes</button>
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
                                <input type="text" placeholder="123 Madison Avenue" className="input long-field" />
                                <PencilIcon />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="label">Address Line 2:</label>
                            <div className="input-container">
                                <input type="text" placeholder="Apt E5" className="input long-field" />
                                <PencilIcon />
                            </div>
                        </div>

                        <div className="flex-row">
                            <div className="form-group short-field country-field">
                                <label className="label">Country:</label>
                                <div className="input-container">
                                    <select className="select">
                                        <option>USA</option>
                                        <option>Canada</option>
                                        <option>Germany</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group short-field state-field">
                                <label className="label">State:</label>
                                <div className="input-container">
                                    <input type="text" placeholder="NY" className="input" />
                                </div>
                            </div>
                        </div>

                        <div className="flex-row">
                            <div className="form-group short-field city-field">
                                <label className="label">City:</label>
                                <div className="input-container">
                                    <input type="text" placeholder="New York" className="input" />
                                    <PencilIcon />
                                </div>
                            </div>

                            <div className="form-group short-field zip-field">
                                <label className="label">ZIP / Postal Code:</label>
                                <div className="input-container">
                                    <input type="text" placeholder="12345" className="input" />
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
