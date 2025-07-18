import React from 'react';
import { Link } from 'react-router-dom';
import './PerfumeCard.css';

const PerfumeCard = ({ id, image, brand, name, volume, price, badge }) => {
    return (
        <Link to={`/perfume/${id}`} className="perfume-card perfume-link">
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
        </Link>
    );
};

export default PerfumeCard;
