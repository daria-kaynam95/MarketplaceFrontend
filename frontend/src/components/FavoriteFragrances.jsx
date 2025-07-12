import React from 'react';
import './FavoriteFragrances.css';

function FavoriteFragrances() {
    return (
        <div className="favorite-container">
            <h2 className="favorite-title">FAVORITE FRAGRANCES</h2>

            <p className="favorite-description">
                0/0 selected for comparing
            </p>

            <button className="favorite-button">Add to Compare List</button>
        </div>
    );
}

export default FavoriteFragrances;

