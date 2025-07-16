import React, { useState } from 'react';
import ReviewModal from './ReviewModal';
import './ReviewsPanel.css';

const ReviewsPanel = ({ perfumeId }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <section className="reviews-panel">
            <h2 className="reviews-title">Reviews Of Women's Perfumes</h2>
            <p className="reviews-text">
                There are no reviews yet. Would you like to add your review of the perfume?
            </p>
            <button className="reviews-button" onClick={() => setShowModal(true)}>
                Add Your Review
            </button>

            {showModal && (
                <ReviewModal
                    perfumeId={perfumeId}
                    onClose={() => setShowModal(false)}
                />
            )}
        </section>
    );
};

export default ReviewsPanel;

