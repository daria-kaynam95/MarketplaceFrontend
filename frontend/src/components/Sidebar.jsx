/// <reference path="authcontext.jsx" />
import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
    const [openSections, setOpenSections] = useState({
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

    const toggleSection = (section) => {
        setOpenSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    return (
        <aside className="sidebar">
            {/* Brand */}
            <div className="filter-section">
                <h3 onClick={() => toggleSection('brand')} className="section-header">
                    Brand
                    <span className="toggle-icon">{openSections.brand ? '▾' : '▸'}</span>
                </h3>
                {openSections.brand && (
                    <>
                        <div className="alphabet">
                            {'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'.split(' ').map(letter => (
                                <span key={letter} className="alphabet-letter">{letter}</span>
                            ))}
                        </div>
                        <ul>
                            <li><span>Byredo</span><input type="checkbox" /></li>
                            <li><span>Chanel</span><input type="checkbox" /></li>
                            <li><span>Dior</span><input type="checkbox" /></li>
                            <li><span>Gucci</span><input type="checkbox" /></li>
                            <li><span>Kilian</span><input type="checkbox" /></li>
                            <li><span>Lancôme</span><input type="checkbox" /></li>
                            <li><span>Tom Ford</span><input type="checkbox" /></li>
                            <li><span>Versace</span><input type="checkbox" /></li>
                        </ul>
                    </>
                )}
            </div>

            {/* Fragrance Family */}
            <div className="filter-section">
                <h3 onClick={() => toggleSection('fragranceFamily')} className="section-header">
                    Fragrance Family
                    <span className="toggle-icon">{openSections.fragranceFamily ? '▾' : '▸'}</span>
                </h3>
                {openSections.fragranceFamily && (
                    <ul>
                        <li><span>Floral</span><input type="checkbox" /></li>
                        <li><span>Oriental</span><input type="checkbox" /></li>
                        <li><span>Woody</span><input type="checkbox" /></li>
                        <li><span>Fresh</span><input type="checkbox" /></li>
                        <li><span>Fruity</span><input type="checkbox" /></li>
                        <li><span>Gourmand</span><input type="checkbox" /></li>
                        <li><span>Citrus</span><input type="checkbox" /></li>
                        <li><span>Aquatic</span><input type="checkbox" /></li>
                    </ul>
                )}
            </div>

            {/* Concentration */}
            <div className="filter-section">
                <h3 onClick={() => toggleSection('concentration')} className="section-header">
                    Concentration
                    <span className="toggle-icon">{openSections.concentration ? '▾' : '▸'}</span>
                </h3>
                {openSections.concentration && (
                    <ul>
                        <li><span>Eau de Toilette</span><input type="checkbox" /></li>
                        <li><span>Eau de Parfum</span><input type="checkbox" /></li>
                        <li><span>Parfum</span><input type="checkbox" /></li>
                    </ul>
                )}
            </div>

            {/* Scent Notes */}
            <div className="filter-section">
                <h3 onClick={() => toggleSection('scentNotes')} className="section-header">
                    Scent Notes
                    <span className="toggle-icon">{openSections.scentNotes ? '▾' : '▸'}</span>
                </h3>
                {openSections.scentNotes && (
                    <ul>
                        <li><span>Amber</span><input type="checkbox" /></li>
                        <li><span>Bergamot</span><input type="checkbox" /></li>
                        <li><span>Citrus</span><input type="checkbox" /></li>
                        <li><span>Jasmine</span><input type="checkbox" /></li>
                        <li><span>Lavender</span><input type="checkbox" /></li>
                        <li><span>Musk</span><input type="checkbox" /></li>
                        <li><span>Patchouli</span><input type="checkbox" /></li>
                        <li><span>Pear</span><input type="checkbox" /></li>
                    </ul>
                )}
            </div>

            {/* Occasion */}
            <div className="filter-section">
                <h3 onClick={() => toggleSection('occasion')} className="section-header">
                    Occasion
                    <span className="toggle-icon">{openSections.occasion ? '▾' : '▸'}</span>
                </h3>
                {openSections.occasion && (
                    <ul>
                        <li><span>Everyday</span><input type="checkbox" /></li>
                        <li><span>Evening</span><input type="checkbox" /></li>
                        <li><span>Special Event</span><input type="checkbox" /></li>
                    </ul>
                )}
            </div>

            {/* Longevity */}
            <div className="filter-section">
                <h3 onClick={() => toggleSection('longevity')} className="section-header">
                    Longevity
                    <span className="toggle-icon">{openSections.longevity ? '▾' : '▸'}</span>
                </h3>
                {openSections.longevity && (
                    <ul>
                        <li><span>Light (2–4 hrs)</span><input type="checkbox" /></li>
                        <li><span>Moderate (4–6 hrs)</span><input type="checkbox" /></li>
                        <li><span>Long-lasting (6–8+ hrs)</span><input type="checkbox" /></li>
                        <li><span>Very long (12+ hrs)</span><input type="checkbox" /></li>
                    </ul>
                )}
            </div>

            {/* Bottle Size */}
            <div className="filter-section">
                <h3 onClick={() => toggleSection('bottleSize')} className="section-header">
                    Bottle Size
                    <span className="toggle-icon">{openSections.bottleSize ? '▾' : '▸'}</span>
                </h3>
                {openSections.bottleSize && (
                    <ul>
                        <li><span>5 ml – 15 ml</span><input type="checkbox" /></li>
                        <li><span>15 ml – 30 ml</span><input type="checkbox" /></li>
                        <li><span>30 ml – 50 ml</span><input type="checkbox" /></li>
                        <li><span>75 ml – 100 ml</span><input type="checkbox" /></li>
                        <li><span>100+ ml</span><input type="checkbox" /></li>
                    </ul>
                )}
            </div>

            {/* Origin */}
            <div className="filter-section">
                <h3 onClick={() => toggleSection('origin')} className="section-header">
                    Origin
                    <span className="toggle-icon">{openSections.origin ? '▾' : '▸'}</span>
                </h3>
                {openSections.origin && (
                    <ul>
                        <li><span>France</span><input type="checkbox" /></li>
                        <li><span>Italy</span><input type="checkbox" /></li>
                        <li><span>USA</span><input type="checkbox" /></li>
                    </ul>
                )}
            </div>

            {/* Ethics */}
            <div className="filter-section">
                <h3 onClick={() => toggleSection('ethics')} className="section-header">
                    Ethics
                    <span className="toggle-icon">{openSections.ethics ? '▾' : '▸'}</span>
                </h3>
                {openSections.ethics && (
                    <ul>
                        <li><span>Cruelty-free</span><input type="checkbox" /></li>
                        <li><span>Eco-conscious</span><input type="checkbox" /></li>
                        <li><span>Refillable bottle</span><input type="checkbox" /></li>
                        <li><span>Vegan</span><input type="checkbox" /></li>
                    </ul>
                )}
            </div>

            {/* Price Range */}
            <div className="filter-section">
                <h3 onClick={() => toggleSection('priceRange')} className="section-header">
                    Price Range
                    <span className="toggle-icon">{openSections.priceRange ? '▾' : '▸'}</span>
                </h3>
                {openSections.priceRange && (
                    <ul>
                        <li><span>Under $80</span><input type="checkbox" /></li>
                        <li><span>$80–$200</span><input type="checkbox" /></li>
                        <li><span>$200–$300</span><input type="checkbox" /></li>
                        <li><span>$300–$500</span><input type="checkbox" /></li>
                        <li><span>$600+</span><input type="checkbox" /></li>
                    </ul>
                )}
            </div>
        </aside>
    );
};

export default Sidebar;
