import React from 'react';
import { Link } from 'react-router-dom';
import './PerfumeCardMen.css';

const PerfumeCardMen = ({ id, image, brand, name, volume, price, badge, variant, imageClass, badgeClass }) => {
    return (
        <Link to={`/perfume/${id}`} className="perfume-link">
            <div className={`perfume-card-men variant${variant}`}>
                <div className="overlay-men">
                    <div className="add-to-cart-men">Add to Cart</div>
                </div>

                <div className="image-container-men">
                    {badge && (
                        <span className={`perfume-badge-men ${badgeClass || ''}`}>{badge}</span>
                    )}
                    <img
                        src={image}
                        alt={name}
                        className={`perfume-image-men ${imageClass || ''}`}
                    />
                </div>

                <div className="perfume-text-men">
                    <div className="perfume-top-row-men">
                        <span className={`perfume-brand-men gap${variant}`}>{brand}</span>
                        <span className="perfume-volume-men">{volume}</span>
                    </div>
                    <div className="perfume-name-men">{name}</div>
                    <div className="perfume-price-men">${price}</div>
                </div>
            </div>
        </Link>
    );
};

export default PerfumeCardMen;
