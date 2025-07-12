import React from "react";
import { useNavigate } from "react-router-dom";
import "./ShopByGender.css";

import womenImg from "../assets/gender/women.png";
import menImg from "../assets/gender/men.png";

import ws1 from "../assets/gender/women-bestseller.png";
import ws2 from "../assets/gender/women-luxury.png";
import ws3 from "../assets/gender/women-clearance.png";
import ws4 from "../assets/gender/women-new.png";

import ms1 from "../assets/gender/men-bestseller.png";
import ms2 from "../assets/gender/men-luxury.png";
import ms3 from "../assets/gender/men-clearance.png";
import ms4 from "../assets/gender/men-new.png";

const ShopByGender = () => {
    const navigate = useNavigate();

    return (
        <section className="shop-gender">
            <h2 className="shop-title">Shop By Gender</h2>

            {/* Women */}
            <div className="gender-row thumbnail-women">
                <div className="main-image">
                    <img src={womenImg} alt="Women" />
                    <div className="gender-text">WOMEN</div>
                </div>
                <div className="mini-card best-sellers">
                    <img src={ws1} alt="Best sellers" />
                    <p>Best sellers</p>
                </div>
                <div className="mini-card luxury">
                    <img src={ws2} alt="Luxury" />
                    <p>Luxury</p>
                </div>
                <div className="mini-card clearance">
                    <img src={ws3} alt="Clearance" />
                    <p>Clearance</p>
                </div>
                <div className="mini-card new-arrivals">
                    <img src={ws4} alt="New arrivals" />
                    <p>New arrivals</p>
                </div>
                <button className="shop-btn" onClick={() => navigate("/catalog-women")}>
                    SHOP ALL WOMEN
                </button>
            </div>

            {/* Men */}
            <div className="gender-row thumbnail-men">
                <div className="main-image">
                    <img src={menImg} alt="Men" />
                    <div className="gender-text">MEN</div>
                </div>
                <div className="mini-card best-sellers">
                    <img src={ms1} alt="Best sellers" />
                    <p>Best sellers</p>
                </div>
                <div className="mini-card luxury">
                    <img src={ms2} alt="Luxury" />
                    <p>Luxury</p>
                </div>
                <div className="mini-card clearance">
                    <img src={ms3} alt="Clearance" />
                    <p>Clearance</p>
                </div>
                <div className="mini-card new-arrivals">
                    <img src={ms4} alt="New arrivals" />
                    <p>New arrivals</p>
                </div>
                <button className="shop-btn" onClick={() => navigate("/catalog-men")}>
                    SHOP ALL MEN
                </button>
            </div>
        </section>
    );
};

export default ShopByGender;





