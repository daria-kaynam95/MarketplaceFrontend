import React from 'react';
import './PerfumeCard.css';

const PerfumeCard = ({ image, brand, name, volume, price, badge }) => {
    return (
        <div className="perfume-card">
            {/* Оверлей поверх карточки */}
            <div className="overlay">
                <div className="add-to-cart">Add to Cart</div>
            </div>

            <div className="image-container">
                {badge && <span className="perfume-badge">{badge}</span>}
                <img src={image} alt={name} className="perfume-image" />
            </div>
            <div className="perfume-text">
                <div className="perfume-top-row">
                    <span className="perfume-brand-line">
                        <span className="perfume-brand">{brand}</span>
                        <span className="perfume-volume">{volume}</span>
                    </span>
                </div>
                <div className="perfume-name">{name}</div>
                <div className="perfume-price">${price}</div>
            </div>
        </div>
    );
};

export default PerfumeCard;

