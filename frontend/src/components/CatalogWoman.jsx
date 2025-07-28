import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PerfumeCard from './PerfumeCard';
import Sidebar from './Sidebar';
import Pagination from './Pagination';
import ReviewsPanel from './ReviewsPanel';
import RecentlyViewed from './RecentlyViewed';
import './CatalogWoman.css';

import perfumeAllData from '../data/perfumeAllData';
import headerImage from '../assets/header.png';

const CatalogWoman = () => {
    const navigate = useNavigate();

    // Берём из всех данных только женские духи (id начинается с "w")
    const allProducts = useMemo(() => perfumeAllData.filter(p => p.id.startsWith('w')), []);

    // Фильтры — в состоянии
    const [filters, setFilters] = useState({
        name: '',
        brand: [],
        bottleSize: [],
        priceRange: []
    });

    // Отфильтрованные продукты
    const [filteredProducts, setFilteredProducts] = useState(allProducts);

    // Обновляем фильтрованные товары при изменении фильтров
    useEffect(() => {
        let result = allProducts;

        // Поиск по имени (частичное совпадение)
        if (filters.name) {
            const nameLower = filters.name.toLowerCase();
            result = result.filter(p => p.name.toLowerCase().includes(nameLower));
        }

        // Фильтр по брендам (если выбран хотя бы один)
        if (filters.brand.length > 0) {
            result = result.filter(p => filters.brand.includes(p.brand));
        }

        // Фильтр по размеру бутылки (если выбран хотя бы один)
        if (filters.bottleSize.length > 0) {
            result = result.filter(p => filters.bottleSize.includes(p.bottleSize));
        }

        // Фильтр по ценовому диапазону (если выбран хотя бы один)
        if (filters.priceRange.length > 0) {
            result = result.filter(p => {
                const price = p.price;
                return filters.priceRange.some(range => {
                    switch (range) {
                        case 'Under $80':
                            return price < 80;
                        case '$80–$200':
                            return price >= 80 && price <= 200;
                        case '$200–$300':
                            return price > 200 && price <= 300;
                        case '$300–$500':
                            return price > 300 && price <= 500;
                        case '$600+':
                            return price >= 600;
                        default:
                            return true;
                    }
                });
            });
        }

        setFilteredProducts(result);
    }, [filters, allProducts]);

    // Обработчик обновления фильтров от Sidebar
    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    // Переход на страницу товара
    const handleProductClick = (id) => {
        navigate(`/perfume/${id}`);
    };

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
                    {/* Передаем фильтры и колбэк для обновления в Sidebar */}
                    <Sidebar filters={filters} onFilterChange={handleFilterChange} />
                    <main className="catalog-grid">
                        {filteredProducts.length === 0 ? (
                            <p>Товары не найдены</p>
                        ) : (
                            filteredProducts.map(product => (
                                <PerfumeCard
                                    key={product.id}
                                    {...product}
                                    onClick={() => handleProductClick(product.id)}
                                />
                            ))
                        )}
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



