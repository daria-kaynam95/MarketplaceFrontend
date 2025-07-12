import React from 'react';
import PerfumeCard from './PerfumeCard';
import Sidebar from './Sidebar';
import Pagination from './Pagination';
import ReviewsPanel from './ReviewsPanel';
import RecentlyViewed from './RecentlyViewed';
import './CatalogWoman.css';

// Импорты картинок
import headerImage from '../assets/header.png';
import perfume1 from '../assets/wpefrume/p1.png';
import perfume2 from '../assets/wpefrume/p2.png';
import perfume3 from '../assets/wpefrume/p3.png';
import perfume4 from '../assets/wpefrume/p4.png';
import perfume5 from '../assets/wpefrume/p5.png';
import perfume6 from '../assets/wpefrume/p6.png';
import perfume7 from '../assets/wpefrume/p7.png';
import perfume8 from '../assets/wpefrume/p8.png';
import perfume9 from '../assets/wpefrume/p9.png';
import perfume10 from '../assets/wpefrume/p10.png';
import perfume11 from '../assets/wpefrume/p11.png';
import perfume12 from '../assets/wpefrume/p12.png';

const CatalogWoman = () => {
    const products = [
        { id: 1, image: perfume1, brand: 'Chanel', name: "EAU DE COLOGNE", volume: '200 ml', price: 505, badge: 'NEW' },
        { id: 2, image: perfume2, brand: 'Gucci', name: 'GUILTY ABSOLUTE', volume: '200 ml', price: 240, badge: 'HIT' },
        { id: 3, image: perfume3, brand: 'Byredo', name: 'BAL D`AFRIQUE', volume: '200 ml', price: 300 },
        { id: 4, image: perfume4, brand: 'Kilian Paris', name: 'POSES ON ICE', volume: '50 ml', price: 280 },
        { id: 5, image: perfume5, brand: 'Lancome', name: 'O DE LANCOME', volume: '50 ml', price: 200 },
        { id: 6, image: perfume6, brand: 'Lancome', name: 'LANCOME HYPNOSE', volume: '30 ml', price: 220, badge: 'HIT' },
        { id: 7, image: perfume7, brand: 'Tom Ford', name: 'BOIS PACIFIQUE', volume: '100 ml', price: 400, badge: 'NEW' },
        { id: 8, image: perfume8, brand: 'Tom Ford', name: 'LOST CHERRY', volume: '100 ml', price: 500, badge: 'HIT' },
        { id: 9, image: perfume9, brand: 'Chanel', name: 'CHANCE EAU TENDRE', volume: '100 ml', price: 200 },
        { id: 10, image: perfume10, brand: 'Versace', name: 'EROS POUR FEMME', volume: '100 ml', price: 220 },
        { id: 11, image: perfume11, brand: 'Chalen', name: 'DYLAN TURQUOISE', volume: '30 ml', price: 150, badge: 'HIT' },
        { id: 12, image: perfume12, brand: 'Byredo', name: 'TOBACCO MANDARIN', volume: '50 ml', price: 200, badge: 'NEW' },
    ];

    return (
        <div>
            {/* Заголовок с фоновым изображением */}
            <div
                className="catalog-header"
                style={{ backgroundImage: `url(${headerImage})` }}
            >
                <div className="catalog-overlay" />
                <div className="catalog-header-text">
                    <p className="catalog-label">CATALOG</p>
                    <h1>Women Perfume</h1>
                    <p className="catalog-breadcrumb">Home &gt; Women Perfume</p>
                </div>
            </div>

            {/* Основной контент */}
            <div className="catalog-section">
                <div className="catalog-container">
                    <Sidebar />
                    <main className="catalog-grid">
                        {products.map(product => (
                            <PerfumeCard key={product.id} {...product} />
                        ))}
                    </main>
                </div>
                <Pagination />
            </div>

            {/* Панель отзывов */}
            <ReviewsPanel />

            {/* Недавно просмотренные товары */}
            <RecentlyViewed />
        </div>
    );
};

export default CatalogWoman;
