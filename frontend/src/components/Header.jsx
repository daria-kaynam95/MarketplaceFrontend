import React, { useState, useContext } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiSettings } from "react-icons/fi";
import { AuthContext } from "../context/AuthContext";
import { useCompanyAuth } from "../context/CompanyAuthContext";

function Header() {
    const [showSearch, setShowSearch] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const { isAuthenticated } = useContext(AuthContext);
    const { isCompanyAuthenticated } = useCompanyAuth();
    const navigate = useNavigate();

    const handleSearchClick = () => setShowSearch((prev) => !prev);
    const handleFavoriteClick = () =>
        isAuthenticated ? navigate("/favorites") : navigate("/signin");
    const handleCartClick = () => navigate("/cart");
    const handleProfileClick = () => {
        if (isAuthenticated) navigate("/user-profile");
        else if (isCompanyAuthenticated) navigate("/company-profile");
        else navigate("/register");
    };
    const handleSettingsClick = () => {
        if (isCompanyAuthenticated) navigate("/company-settings");
        else navigate("/settings");
    };

    return (
        <header className="header">
            <div className="header-left">
                <div className="logo">Elyssia</div>
            </div>

            <div className="header-middle-right">
                <nav
                    className="nav"
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                >
                    <Link to="/">NEW</Link>
                    <Link to="/catalog">CATALOG</Link>
                    <Link to="/offers">OFFERS</Link>
                    <Link to="/best-sellers">BEST SELLERS</Link>
                    <Link to="/shop-all">SHOP ALL</Link>

                    {showDropdown && (
                        <div className="dropdown-menu">
                            <div className="dropdown-content">
                                <div>
                                    <p>WOMEN PERFUME</p>
                                    <p>MEN PERFUME</p>
                                    <p>UNISEX PERFUME</p>
                                    <p>HOME FRAGRANCE</p>
                                </div>
                                <div>
                                    <p>SETS</p>
                                    <p>MINIATURES</p>
                                    <p>OIL PERFUMES</p>
                                    <p>PERFUMED WATER</p>
                                    <p>COLOGNES</p>
                                </div>
                                <div>
                                    <p>NEW ITEMS</p>
                                    <p>SALES</p>
                                </div>
                            </div>
                        </div>
                    )}
                </nav>

                <div className="options">
                    <span className="currency">USD - Dollar ▾</span>
                    <span className="language">ENG ▾</span>

                    <span
                        className="icon search-icon"
                        onClick={handleSearchClick}
                        style={{ position: "relative", cursor: "pointer" }}
                    >
                        <FiSearch />
                    </span>

                    <div className={`search-container ${showSearch ? "show" : ""}`}>
                        <div className="search-input-wrapper">
                            <input
                                className="search-input"
                                type="text"
                                placeholder="Search Perfume..."
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                autoFocus={showSearch}
                            />
                            <FiSearch className="search-icon-inside" />
                        </div>
                    </div>

                    <span
                        className="icon"
                        style={{ cursor: "pointer" }}
                        onClick={handleProfileClick}
                    >
                        <svg viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.33301 19.4974C4.33301 18.3481 4.78955 17.2459 5.60221 16.4333C6.41487 15.6206 7.51707 15.1641 8.66634 15.1641H17.333C18.4823 15.1641 19.5845 15.6206 20.3971 16.4333C21.2098 17.2459 21.6663 18.3481 21.6663 19.4974C21.6663 20.072 21.4381 20.6231 21.0317 21.0295C20.6254 21.4358 20.0743 21.6641 19.4997 21.6641H6.49967C5.92504 21.6641 5.37394 21.4358 4.96761 21.0295C4.56128 20.6231 4.33301 20.072 4.33301 19.4974Z" />
                            <path d="M13 10.832C14.7949 10.832 16.25 9.37696 16.25 7.58203C16.25 5.78711 14.7949 4.33203 13 4.33203C11.2051 4.33203 9.75 5.78711 9.75 7.58203C9.75 9.37696 11.2051 10.832 13 10.832Z" />
                        </svg>
                    </span>

                    <span
                        className="icon"
                        style={{ cursor: "pointer" }}
                        onClick={handleFavoriteClick}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            className="heart-icon"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M16.5 4.5C18.706 4.5 20.5 6.294 20.5 8.5C20.5 13.169 14.957 17.441 12 19.523C9.043 17.441 3.5 13.169 3.5 8.5C3.5 6.294 5.294 4.5 7.5 4.5C8.14231 4.50145 8.77487 4.65716 9.34445 4.95405C9.91403 5.25093 10.404 5.68029 10.773 6.206L12 7.953L13.227 6.207C13.5959 5.68111 14.0858 5.25155 14.6554 4.95449C15.225 4.65743 15.8576 4.50156 16.5 4.5Z" />
                        </svg>
                    </span>

                    <span
                        className="icon cart-icon"
                        style={{ cursor: "pointer" }}
                        onClick={handleCartClick}
                    >
                        <svg viewBox="0 0 23 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.6361 1L17.9218 6.75M4.77898 6.75L8.06469 1M20.0247 6.75H2.67612C2.42972 6.74501 2.18536 6.79552 1.96113 6.89779C1.7369 7.00006 1.53855 7.15146 1.38078 7.34079C1.22301 7.53012 1.10985 7.75251 1.04969 7.99151C0.989537 8.2305 0.983921 8.47997 1.03326 8.72143L2.8404 17.7571C2.91721 18.1338 3.12367 18.4716 3.42385 18.7118C3.72403 18.9519 4.09892 19.0792 4.48326 19.0714H18.2175C18.6019 19.0792 18.9768 18.9519 19.277 18.7118C19.5771 18.4716 19.7836 18.1338 19.8604 17.7571L21.6675 8.72143C21.7169 8.47997 21.7113 8.2305 21.6511 7.99151C21.591 7.75251 21.4778 7.53012 21.32 7.34079C21.1623 7.15146 20.9639 7.00006 20.7397 6.89779C20.5155 6.79552 20.2711 6.74501 20.0247 6.75Z" />
                        </svg>
                    </span>

                    <span
                        className="icon settings-icon"
                        style={{ cursor: "pointer" }}
                        onClick={handleSettingsClick}
                    >
                        <FiSettings size={20} />
                    </span>
                </div>
            </div>
        </header>
    );
}

export default Header;
