import React from "react";
import './BestSellers.css';

import no5 from "../assets/no5.png";
import baccarat from "../assets/baccarat.png";
import libre from "../assets/libre.png";

const bestSellers = [
    {
        brand: "Chanel",
        name: "№.5",
        price: "$265",
        image: no5,
        imgClass: "img-no5"
    },
    {
        brand: "Maison Francis Kurkdjian",
        name: "Baccarat Rouge 540",
        price: "$423",
        image: baccarat,
        imgClass: "img-baccarat"
    },
    {
        brand: "Yves Saint Laurent",
        name: "Libre",
        price: "$213",
        image: libre,
        imgClass: "img-libre"
    },
];

function BestSellers() {
    return (
        <section className="best-sellers">
            <h2>Best Sellers</h2>
            <div className="best-sellers-grid">
                {bestSellers.map(({ brand, name, price, image, imgClass }) => (
                    <div key={name} className="item-container">
                        <div className="bottle-frame">
                            <img
                                src={image}
                                alt={name}
                                className={`bottle-img ${imgClass}`}
                            />
                        </div>
                        <div className="info-wrap">
                            <p className="label-house">{brand}</p>
                            <p className="title-main">{name}</p>
                        </div>
                        <p className="amount-tag">{price}</p>
                        <button className="btn-outline">Details</button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default BestSellers;

