import React, { useState } from 'react';
import './ReviewsPanelMen.css';
import ReviewModal from './ReviewModal';


const ReviewsPanelMen = ({ perfumeId }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <section className="reviews-panel-men">
            <h2 className="reviews-title-men">Reviews Of  Men's Perfumes</h2>
            <p className="reviews-text-men">
                There are no reviews yet. Would you like to add your review of the perfume?
            </p>
            <button className="reviews-button-men" onClick={() => setShowModal(true)}>
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

export default ReviewsPanelMen;