import React from 'react';
import './RecentlyViewed.css';
import p13 from '../assets/wpefrume/p13.png';
import p14 from '../assets/wpefrume/p14.png';

const RecentlyViewed = () => {
    const products = [
        {
            id: 1,
            image: p13,
            brand: 'Lancome',
            name: 'IDOLE NECTAR',
            size: '50 ml',
            price: '$300',
        },
        {
            id: 2,
            image: p14,
            brand: 'Kilian Paris',
            name: 'GOOD GIRL GONE BAD',
            size: '50 ml',
            price: '$290',
            tag: 'HIT',
        },
    ];

    return (
        <div className="recently-viewed">
            <h2 className="recently-title">Recently Viewed</h2>
            <div className="recently-list">
                {products.map((product) => (
                    <div key={product.id} className={`recently-card p${product.id}`}>
                        {product.tag && <span className="tag">{product.tag}</span>}
                        <img
                            src={product.image}
                            alt={product.name}
                            className={`recently-pic img-p${product.id}`}
                        />
                        <div className="product-info">
                            <div className="brand-size-row">
                                <span className="product-brand">{product.brand}</span>
                                <span className="product-size">{product.size}</span>
                            </div>
                            <div className="product-name">{product.name}</div>
                            <div className="product-price">{product.price}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentlyViewed;






