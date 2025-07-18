import React from 'react';
import PerfumeCard from './PerfumeCard';
import Sidebar from './Sidebar';
import Pagination from './Pagination';
import ReviewsPanel from './ReviewsPanel';
import RecentlyViewed from './RecentlyViewed';
import './CatalogWoman.css';

import perfumeAllData from '../data/perfumeAllData';
import headerImage from '../assets/header.png';

const CatalogWoman = () => {
    const products = perfumeAllData.filter(p => p.id.startsWith('w'));

    return (
        <div>
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

            <ReviewsPanel />
            <RecentlyViewed />
        </div>
    );
};

export default CatalogWoman;
