import React from 'react';
import './ReviewsPanel.css';

const ReviewsPanel = () => {
    return (
        <section className="reviews-panel">
            <h2 className="reviews-title">Reviews Of Women's Perfumes</h2>
            <p className="reviews-text">
                There are no reviews yet. Would you like to add your review of the perfume?
            </p>
            <button className="reviews-button">Add Your Review</button>
        </section>
    );
};

export default ReviewsPanel;

