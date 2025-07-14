import React from 'react';
import './PerfumeCardMen.css';

const PerfumeCardMen = ({ image, brand, name, volume, price, badge, variant, gapClass, badgeClass }) => {
    const getImageClass = (image) => {
        if (!image) return '';
        const filename = image.split('/').pop().split('.')[0];
        return filename.toLowerCase();
    };

    return (
        <div className={`perfume-card-men ${variant}`}>
            {/* Оверлей — окрашивает всю карточку */}
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
                    className={`perfume-image-men ${getImageClass(image)}`}
                />
            </div>
            <div className="perfume-text-men">
                <div className={`perfume-top-row-men ${gapClass}`}>
                    <span className="perfume-brand-men">{brand}</span>
                    <span className="perfume-volume-men">{volume}</span>
                </div>
                <div className="perfume-name-men">{name}</div>
                <div className="perfume-price-men">${price}</div>
            </div>
        </div>
    );
};

export default PerfumeCardMen;




