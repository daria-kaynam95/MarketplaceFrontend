import React from 'react';
import './ReviewSummaryPanel.css';

const ReviewSummaryPanel = ({
    averageRating,
    totalReviews,
    ratingBreakdown,
    onAddReviewClick,
    hasUserReview
}) => {
    const roundedRating = Math.round(averageRating);
    const stars = (count) => '★'.repeat(count) + '☆'.repeat(5 - count);

    return (
        <div className="review-summary-panel">
            <div className="summary-left">
                <h1 className="average-rating">{averageRating.toFixed(1)}</h1>
                <div className="stars">{stars(roundedRating)}</div>
                <p className="total-reviews">{totalReviews} total review{totalReviews !== 1 ? 's' : ''}</p>
                <button className="write-review-btn" onClick={onAddReviewClick}>
                    {hasUserReview ? 'Edit Your Review' : 'Write a review'}
                </button>

                <div className="rating-breakdown">
                    {[5, 4, 3, 2, 1].map(star => (
                        <div className="rating-row" key={star}>
                            <span className="stars-row">{stars(star)}</span>
                            <div className="rating-bar-bg">
                                <div
                                    className="rating-bar-fill"
                                    style={{ width: `${(ratingBreakdown[star] / totalReviews) * 100 || 0}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReviewSummaryPanel;
