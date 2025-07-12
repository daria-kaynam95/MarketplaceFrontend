import React from 'react';
import './RecentlyViewedMen.css';
import cedratBoise from '../assets/mpefrume/pmen13.png';
import neroliAmara from '../assets/mpefrume/pmen14.png';

const RecentlyViewedMen = () => {
    const products = [
        {
            id: 1,
            image: cedratBoise,
            brand: 'Mancera',
            name: 'CEDRAT BOISE',
            size: '120 ml',
            price: '$84',
            alignClass: 'img-men-left',
        },
        {
            id: 2,
            image: neroliAmara,
            brand: 'Van Cleef & Arpels',
            name: 'COLLECTION NEROLI AMARA',
            size: '200 ml',
            price: '$367',
            tag: 'HIT',
            alignClass: 'img-men-right',
            tagClass: 'recently-badge2',  // <-- Добавляем отдельный класс для бейджа
        },
    ];

    return (
        <div className="recently-viewed-men">
            <h2 className="recently-title-men">Recently Viewed</h2>
            <div className="recently-list-men">
                {products.map((product) => (
                    <div key={product.id} className={`recently-card-men p${product.id}`}>
                        {product.tag && (
                            <span className={`tag ${product.tagClass || ''}`}>
                                {product.tag}
                            </span>
                        )}
                        <img
                            src={product.image}
                            alt={product.name}
                            className={`product-men-pic img-men-p${product.id} ${product.alignClass}`}
                        />
                        <div className="product-men-info">
                            <div className="product-men-brand-size-row">
                                <span className="product-men-brand">{product.brand}</span>
                                <span className="product-men-size">{product.size}</span>
                            </div>
                            <div className="product-men-name">{product.name}</div>
                            <div className="product-men-price">{product.price}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentlyViewedMen;
