import React, { useState } from 'react';
import { useFavorites } from '../context/FavoriteContext';
import { useNavigate } from 'react-router-dom';
import './FavoriteFragrances.css';

function FavoriteFragrances() {
    const { favorites, removeFromFavorites } = useFavorites();
    const [selected, setSelected] = useState([]);
    const navigate = useNavigate();

    const toggleSelect = (id) => {
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const handleCompare = () => {
        const selectedProducts = favorites.filter((item) =>
            selected.includes(item.id)
        );
        navigate('/compare', { state: { products: selectedProducts } });
    };

    return (
        <div className="favorite-container">
            <h2 className="favorite-title">FAVORITE FRAGRANCES</h2>

            <div className="favorite-grid">
                {favorites.map((perfume) => {
                    const isSelected = selected.includes(perfume.id);
                    return (
                        <div
                            key={perfume.id}
                            className={`favorite-card ${isSelected ? 'selected' : ''}`}
                        >
                            <div
                                className={`checkbox-icon ${isSelected ? 'checked' : ''}`}
                                onClick={() => toggleSelect(perfume.id)}
                            ></div>

                            <img
                                src={perfume.image}
                                alt={perfume.name}
                                className="favorite-image"
                            />

                            <div className="brand-volume">
                                <span className="brand">{perfume.brand}</span>
                                <span className="volume">{perfume.volume}</span>
                            </div>
                            <p className="favorite-name">{perfume.name}</p>
                            <p className="favorite-price">${perfume.price}</p>

                            <button
                                className="remove-btn"
                                onClick={() => removeFromFavorites(perfume.id)}
                            >
                                Remove
                            </button>
                        </div>
                    );
                })}
            </div>

            <p className="favorite-description">
                {selected.length}/{favorites.length} selected for comparing
            </p>
            <button
                className="favorite-button-list"
                onClick={handleCompare}
                disabled={selected.length !== 2}
            >
                Add to Compare List
            </button>
        </div>
    );
}

export default FavoriteFragrances;
