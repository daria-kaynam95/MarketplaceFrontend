import React, { useRef, useState } from "react";
import "./ShopByBrands.css";

import moschino from "../assets/brands/moschino.png";
import tomford from "../assets/brands/tomford.png";
import versace from "../assets/brands/versace.png";
import ajmal from "../assets/brands/ajmal.png";
import chanel from "../assets/brands/chanel.png";
import dior from "../assets/brands/dior.png";
import gucci from "../assets/brands/gucci.png";

const brands = [
    { name: "Moschino", image: moschino, className: "moschino" },
    { name: "Tom Ford", image: tomford, className: "tomford" },
    { name: "Versace", image: versace, className: "versace" },
    { name: "Ajmal", image: ajmal, className: "ajmal" },
    { name: "Chanel", image: chanel, className: "chanel" },
    { name: "Dior", image: dior, className: "dior" },
    { name: "Gucci", image: gucci, className: "gucci" },
];

function ShopByBrands() {
    const sliderRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);

    const scroll = (direction) => {
        const scrollAmount = 300;
        if (sliderRef.current) {
            const { scrollLeft } = sliderRef.current;
            sliderRef.current.scrollBy({
                left: direction === "right" ? scrollAmount : -scrollAmount,
                behavior: "smooth",
            });
            setTimeout(() => {
                setShowLeftArrow(sliderRef.current.scrollLeft > 0);
            }, 300);
        }
    };

    return (
        <section className="shop-brands">
            <h2 className="shop-title">Shop By Brands</h2>
            <div className="slider-container">
                {showLeftArrow && (
                    <button className="slider-button left" onClick={() => scroll("left")}>
                        <span className="arrow">&#x276E;</span>
                    </button>
                )}
                <div className="brands-slider" ref={sliderRef}>
                    {brands.map((brand, index) => (
                        <div key={index} className={`brand-card ${brand.className}`}>
                            <img src={brand.image} alt={brand.name} />
                            <p className={`brand-text ${brand.className}-text`}>
                                {brand.name.toUpperCase()}
                            </p>
                        </div>
                    ))}
                </div>
                <button className="slider-button right" onClick={() => scroll("right")}>
                    <span className="arrow">&#x276F;</span>
                </button>
            </div>
        </section>
    );
}

export default ShopByBrands;




