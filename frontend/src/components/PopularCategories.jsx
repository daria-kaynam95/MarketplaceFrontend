import React from "react";
import { useNavigate } from "react-router-dom";
import "./PopularCategories.css";

import menPerfume from "../assets/men-perfume.png";
import womenPerfume from "../assets/women-perfume.png";
import floralNotes from "../assets/floral-notes.png";
import woodyNotes from "../assets/woody-notes.png";
import freshNotes from "../assets/fresh-notes.png";
import orientalNotes from "../assets/oriental-notes.png";

import menBg from "../assets/bg-men.png";
import womenBg from "../assets/bg-women.png";
import floralBg from "../assets/bg-floral.png";
import woodyBg from "../assets/bg-woody.png";
import freshBg from "../assets/bg-fresh.png";
import freshBg2 from "../assets/bg-mint.png";
import freshBg3 from "../assets/bg-lemon.png";
import orientalBg from "../assets/bg-oriental.png";

import orientalFlower from "../assets/oriental-flower.png";

function PopularCategories() {
    const navigate = useNavigate();

    const handleCategoryClick = (label) => {
        if (label === "WOMEN PERFUME") {
            navigate("/catalog-women");
        } else if (label === "MEN PERFUME") {
            navigate("/catalog-men");
        }
    };

    const categories = [
        { image: menPerfume, label: "MEN PERFUME", customClass: "men-perfume", background: menBg, bgClass: "men-bg" },
        { image: womenPerfume, label: "WOMEN PERFUME", customClass: "women-perfume", background: womenBg, bgClass: "women-bg" },
        { image: floralNotes, label: "FLORAL NOTES", customClass: "floral-notes", background: floralBg, bgClass: "floral-bg" },
        { image: woodyNotes, label: "WOODY NOTES", customClass: "woody-notes", background: woodyBg, bgClass: "woody-bg" },
        { image: freshNotes, label: "FRESH NOTES", customClass: "fresh-notes", background: freshBg, bgClass: "fresh-bg", extraBackgrounds: [freshBg2, freshBg3] },
        { image: orientalNotes, label: "ORIENTAL NOTES", customClass: "oriental-notes", background: orientalBg, bgClass: "oriental-bg", foreground: orientalFlower },
    ];

    return (
        <section className="categories-section">
            <h3 className="categories-subtitle">SHOP BY CATEGORIES</h3>
            <h2 className="categories-title">Popular Categories</h2>

            <div className="categories-list">
                {categories.map((category, index) => (
                    <div
                        className="category-card"
                        key={index}
                        onClick={() => handleCategoryClick(category.label)}
                        style={{ cursor: ["WOMEN PERFUME", "MEN PERFUME"].includes(category.label) ? "pointer" : "default" }}
                    >
                        <div className="category-image-container">
                            <div className="category-bg"></div>
                            <img src={category.background} alt={`${category.label} background`} className={`category-background ${category.bgClass}`} />
                            {category.extraBackgrounds && category.extraBackgrounds.map((bg, i) => (
                                <img key={i} src={bg} alt={`${category.label} background extra ${i + 1}`} className={`category-background fresh-bg-${i + 2}`} />
                            ))}
                            <img src={category.image} alt={category.label} className={`category-image ${category.customClass}`} />
                            {category.foreground && (
                                <img src={category.foreground} alt={`${category.label} foreground`} className="category-foreground" />
                            )}
                        </div>
                        <p>{category.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default PopularCategories;



