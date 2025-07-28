import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ onFilterChange }) => {
    const [openSections, setOpenSections] = useState({
        name: true,
        brand: true,
        fragranceFamily: true,
        concentration: true,
        scentNotes: true,
        occasion: true,
        longevity: true,
        bottleSize: true,
        origin: true,
        ethics: true,
        priceRange: true,
    });

    const [filters, setFilters] = useState({
        name: '',
        brand: [],
        bottleSize: [],
        priceRange: [],
    });

    const toggleSection = (section) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    const handleNameChange = (e) => {
        const updated = { ...filters, name: e.target.value };
        setFilters(updated);
        onFilterChange(updated);
    };

    const handleCheckboxChange = (section, value) => {
        const currentValues = filters[section];
        const updatedValues = currentValues.includes(value)
            ? currentValues.filter((v) => v !== value)
            : [...currentValues, value];

        const updated = { ...filters, [section]: updatedValues };
        setFilters(updated);
        onFilterChange(updated);
    };

    return (
        <aside className="sidebar">
            {/* Name filter (рабочий) */}
            <div className="filter-section">
                <h3 onClick={() => toggleSection('name')} className="section-header">
                    Name
                    <span className="toggle-icon">{openSections.name ? '▾' : '▸'}</span>
                </h3>
                {openSections.name && (
                    <input
                        type="text"
                        placeholder="Search by name..."
                        value={filters.name}
                        onChange={handleNameChange}
                    />
                )}
            </div>

            {/* Brand filter (рабочий) */}
            <div className="filter-section">
                <h3 onClick={() => toggleSection('brand')} className="section-header">
                    Brand
                    <span className="toggle-icon">{openSections.brand ? '▾' : '▸'}</span>
                </h3>
                {openSections.brand && (
                    <ul>
                        {['Byredo', 'Chanel', 'Dior', 'Gucci', 'Kilian', 'Lancôme', 'Tom Ford', 'Versace'].map(
                            (brand) => (
                                <li key={brand}>
                                    <span>{brand}</span>
                                    <input
                                        type="checkbox"
                                        checked={filters.brand.includes(brand)}
                                        onChange={() => handleCheckboxChange('brand', brand)}
                                    />
                                </li>
                            )
                        )}
                    </ul>
                )}
            </div>

            {/* Fragrance Family (декоративный) */}
            <div className="filter-section">
                <h3 onClick={() => toggleSection('fragranceFamily')} className="section-header">
                    Fragrance Family
                    <span className="toggle-icon">{openSections.fragranceFamily ? '▾' : '▸'}</span>
                </h3>
                {openSections.fragranceFamily && (
                    <ul>
                        <li><span>Floral</span><input type="checkbox" /></li>
                        <li><span>Woody</span><input type="checkbox" /></li>
                        <li><span>Oriental</span><input type="checkbox" /></li>
                        <li><span>Fresh</span><input type="checkbox" /></li>
                    </ul>
                )}
            </div>

            {/* Concentration (декоративный) */}
            <div className="filter-section">
                <h3 onClick={() => toggleSection('concentration')} className="section-header">
                    Concentration
                    <span className="toggle-icon">{openSections.concentration ? '▾' : '▸'}</span>
                </h3>
                {openSections.concentration && (
                    <ul>
                        <li><span>EDP</span><input type="checkbox" /></li>
                        <li><span>EDT</span><input type="checkbox" /></li>
                        <li><span>Parfum</span><input type="checkbox" /></li>
                    </ul>
                )}
            </div>

            {/* Scent Notes (декоративный) */}
            <div className="filter-section">
                <h3 onClick={() => toggleSection('scentNotes')} className="section-header">
                    Scent Notes
                    <span className="toggle-icon">{openSections.scentNotes ? '▾' : '▸'}</span>
                </h3>
                {openSections.scentNotes && (
                    <ul>
                        <li><span>Vanilla</span><input type="checkbox" /></li>
                        <li><span>Rose</span><input type="checkbox" /></li>
                        <li><span>Sandalwood</span><input type="checkbox" /></li>
                        <li><span>Citrus</span><input type="checkbox" /></li>
                    </ul>
                )}
            </div>

            {/* Occasion (декоративный) */}
            <div className="filter-section">
                <h3 onClick={() => toggleSection('occasion')} className="section-header">
                    Occasion
                    <span className="toggle-icon">{openSections.occasion ? '▾' : '▸'}</span>
                </h3>
                {openSections.occasion && (
                    <ul>
                        <li><span>Casual</span><input type="checkbox" /></li>
                        <li><span>Evening</span><input type="checkbox" /></li>
                        <li><span>Work</span><input type="checkbox" /></li>
                    </ul>
                )}
            </div>

            {/* Longevity (декоративный) */}
            <div className="filter-section">
                <h3 onClick={() => toggleSection('longevity')} className="section-header">
                    Longevity
                    <span className="toggle-icon">{openSections.longevity ? '▾' : '▸'}</span>
                </h3>
                {openSections.longevity && (
                    <ul>
                        <li><span>1–3 hours</span><input type="checkbox" /></li>
                        <li><span>4–6 hours</span><input type="checkbox" /></li>
                        <li><span>7+ hours</span><input type="checkbox" /></li>
                    </ul>
                )}
            </div>

            {/* Bottle Size filter (рабочий) */}
            <div className="filter-section">
                <h3 onClick={() => toggleSection('bottleSize')} className="section-header">
                    Bottle Size
                    <span className="toggle-icon">{openSections.bottleSize ? '▾' : '▸'}</span>
                </h3>
                {openSections.bottleSize && (
                    <ul>
                        {['5 ml – 15 ml', '15 ml – 30 ml', '30 ml – 50 ml', '75 ml – 100 ml', '100+ ml'].map((size) => (
                            <li key={size}>
                                <span>{size}</span>
                                <input
                                    type="checkbox"
                                    checked={filters.bottleSize.includes(size)}
                                    onChange={() => handleCheckboxChange('bottleSize', size)}
                                />
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Origin (декоративный) */}
            <div className="filter-section">
                <h3 onClick={() => toggleSection('origin')} className="section-header">
                    Origin
                    <span className="toggle-icon">{openSections.origin ? '▾' : '▸'}</span>
                </h3>
                {openSections.origin && (
                    <ul>
                        <li><span>France</span><input type="checkbox" /></li>
                        <li><span>Italy</span><input type="checkbox" /></li>
                        <li><span>UK</span><input type="checkbox" /></li>
                    </ul>
                )}
            </div>

            {/* Ethics (декоративный) */}
            <div className="filter-section">
                <h3 onClick={() => toggleSection('ethics')} className="section-header">
                    Ethics
                    <span className="toggle-icon">{openSections.ethics ? '▾' : '▸'}</span>
                </h3>
                {openSections.ethics && (
                    <ul>
                        <li><span>Cruelty Free</span><input type="checkbox" /></li>
                        <li><span>Vegan</span><input type="checkbox" /></li>
                        <li><span>Sustainable</span><input type="checkbox" /></li>
                    </ul>
                )}
            </div>

            {/* Price Range filter (рабочий) */}
            <div className="filter-section">
                <h3 onClick={() => toggleSection('priceRange')} className="section-header">
                    Price Range
                    <span className="toggle-icon">{openSections.priceRange ? '▾' : '▸'}</span>
                </h3>
                {openSections.priceRange && (
                    <ul>
                        {['Under $80', '$80–$200', '$200–$300', '$300–$500', '$600+'].map((price) => (
                            <li key={price}>
                                <span>{price}</span>
                                <input
                                    type="checkbox"
                                    checked={filters.priceRange.includes(price)}
                                    onChange={() => handleCheckboxChange('priceRange', price)}
                                />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </aside>
    );
};

export default Sidebar;

