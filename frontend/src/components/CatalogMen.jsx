import React from 'react';
import PerfumeCard from './PerfumeCardMen';
import Sidebar from './Sidebar';
import Pagination from './Pagination';
import ReviewsPanel from './ReviewsPanelMen';
import RecentlyViewedMen from './RecentlyViewedMen';
import './CatalogMen.css';

import headerImage from '../assets/headermen.png';
import pmen1 from '../assets/mpefrume/pmen1.png';
import pmen2 from '../assets/mpefrume/pmen2.png';
import pmen3 from '../assets/mpefrume/pmen3.png';
import pmen4 from '../assets/mpefrume/pmen4.png';
import pmen5 from '../assets/mpefrume/pmen5.png';
import pmen6 from '../assets/mpefrume/pmen6.png';
import pmen7 from '../assets/mpefrume/pmen7.png';
import pmen8 from '../assets/mpefrume/pmen8.png';
import pmen9 from '../assets/mpefrume/pmen9.png';
import pmen10 from '../assets/mpefrume/pmen10.png';
import pmen11 from '../assets/mpefrume/pmen11.png';
import pmen12 from '../assets/mpefrume/pmen12.png';

const CatalogMen = () => {
    const products = [
        { id: 1, image: pmen1, brand: 'Dior', name: 'SAUVAGE', volume: '100 ml', price: 546, badge: 'HIT', variant: 'variant1', gapClass: 'gap1', badgeClass: 'badge1' },
        { id: 2, image: pmen2, brand: 'Hugo Boss', name: 'BOSS BOTTLED', volume: '50 ml', price: 200, variant: 'variant2', gapClass: 'gap2' },
        { id: 3, image: pmen3, brand: 'Armani', name: 'ACQUA DI GIO PROFONDO', volume: '30 ml', price: 87, badge: 'NEW', variant: 'variant3', gapClass: 'gap3', badgeClass: 'badge3' },
        { id: 4, image: pmen4, brand: 'Dolce&Gabbana', name: 'K BY DOLCE&GABBANA', volume: '50 ml', price: 177, variant: 'variant4', gapClass: 'gap4' },
        { id: 5, image: pmen5, brand: 'Tom Ford', name: 'VANILLE FATALE', volume: '100 ml', price: 375, variant: 'variant5', gapClass: 'gap5' },
        { id: 6, image: pmen6, brand: 'Gucci', name: 'BLOOM PARFUME', volume: '150 ml', price: 147, badge: 'HIT', variant: 'variant6', gapClass: 'gap6', badgeClass: 'badge6' },
        { id: 7, image: pmen7, brand: 'Chanel', name: 'BLEU DE CHANEL', volume: '100 ml', price: 263, badge: 'HIT', variant: 'variant7', gapClass: 'gap7', badgeClass: 'badge7' },
        { id: 8, image: pmen8, brand: 'Kilian', name: 'LEMON IN ZEST', volume: '200 ml', price: 484, variant: 'variant8', gapClass: 'gap8' },
        { id: 9, image: pmen9, brand: 'Versace', name: 'EROS ENERGY POUR', volume: '100 ml', price: 96, badge: 'NEW', variant: 'variant9', gapClass: 'gap9', badgeClass: 'badge9' },
        { id: 10, image: pmen10, brand: 'Yves Saint Laurent', name: 'MYSLF', volume: '100 ml', price: 260, variant: 'variant10' },
        { id: 11, image: pmen11, brand: 'Hugo Boss', name: 'NUMBER ONE', volume: '50 ml', price: 155, badge: 'HIT', variant: 'variant11', badgeClass: 'badge11' },
        { id: 12, image: pmen12, brand: 'Moschino', name: 'TOY BOY', volume: '100 ml', price: 123, badge: 'NEW', variant: 'variant12', badgeClass: 'badge12' },
    ];

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
                            <PerfumeCard key={product.id} {...product} />
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



