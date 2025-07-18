import React from 'react';
import PerfumeCardMen from './PerfumeCardMen';
import Sidebar from './Sidebar';
import Pagination from './Pagination';
import ReviewsPanel from './ReviewsPanelMen';
import RecentlyViewedMen from './RecentlyViewedMen';
import './CatalogMen.css';

import perfumeAllData from '../data/perfumeAllData';
import headerImage from '../assets/headermen.png';

const CatalogMen = () => {
    const products = perfumeAllData.filter(p => p.id.startsWith('m'));

    return (
        <div>
            <div
                className="catalog-header"
                style={{ backgroundImage: `url(${headerImage})` }}
            >
                <div className="catalog-overlay" />
                <div className="catalog-header-text">
                    <p className="catalog-label">CATALOG</p>
                    <h1>Men Perfume</h1>
                    <p className="catalog-breadcrumb">Home &gt; Men Perfume</p>
                </div>
            </div>

            <div className="catalog-section">
                <div className="catalog-container">
                    <Sidebar />
                    <main className="catalog-grid">
                        {products.map(product => (
                            <PerfumeCardMen key={product.id} {...product} />
                        ))}
                    </main>
                </div>
                <Pagination />
            </div>

            <ReviewsPanel />
            <RecentlyViewedMen />
        </div>
    );
};

export default CatalogMen;
