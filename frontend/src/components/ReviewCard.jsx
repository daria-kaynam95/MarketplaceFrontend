import React from 'react';
import './ReviewCard.css';

const ReviewCard = ({ userName, rating, reviewText, isConfirmed }) => {
    return (
        <div className="review-card">
            <div className="review-header">
                <span className="review-name">{userName}</span>
                <span className="review-stars">{'★'.repeat(rating)}</span>
            </div>
            {isConfirmed && (
                <div className="review-confirmed">
                    <i className="fa fa-shopping-bag" aria-hidden="true"></i> Purchase confirmed
                </div>
            )}
            <div className="review-text">{reviewText}</div>
        </div>
    );
};

export default ReviewCard;
