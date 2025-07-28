import React, { useState, useEffect } from 'react';
import './ReviewModal.css';

const ReviewModal = ({ onClose, perfumeId, existingReview }) => {
    const [rating, setRating] = useState(existingReview?.rating || 0);
    const [text, setText] = useState(existingReview?.reviewText || '');

    useEffect(() => {
        if (existingReview) {
            setRating(existingReview.rating);
            setText(existingReview.reviewText);
        }
    }, [existingReview]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('authToken');
        if (!token) {
            alert('You must be logged in to leave a review.');
            return;
        }

        const url = existingReview
            ? `https://marketplaceapi20250628113538.azurewebsites.net/api/reviews/update-review/${existingReview.id}`
            : 'https://marketplaceapi20250628113538.azurewebsites.net/api/reviews/create-review';

        const method = existingReview ? 'PUT' : 'POST';

        const userId = localStorage.getItem('userId');

        const body = {
            perfumeId: Number(perfumeId),
            rating: Number(rating),
            text: text,
        };

        if (userId) {
            body.userId = Number(userId);
        }

        console.log('Sending review body:', body);

        try {
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(body),
            });

            if (response.ok) {
                onClose();
            } else {
                let errorText = 'Failed to submit review';
                try {
                    const errorData = await response.json();
                    errorText = errorData.message || JSON.stringify(errorData);
                } catch (err) {
                    console.error('Error parsing error response:', err);
                }
                alert(errorText);
            }
        } catch (error) {
            console.error('Submit error:', error);
            alert('An error occurred while submitting the review.');
        }
    };

    const handleDelete = async () => {
        if (!existingReview) return;

        const token = localStorage.getItem('authToken');
        if (!token) {
            alert('You must be logged in to delete a review.');
            return;
        }

        try {
            const response = await fetch(`https://marketplaceapi20250628113538.azurewebsites.net/api/reviews/delete-review/${existingReview.id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.ok) {
                onClose();
            } else {
                const errorData = await response.json();
                alert(errorData.message || 'Failed to delete review');
            }
        } catch (error) {
            console.error('Delete error:', error);
            alert('An error occurred while deleting the review.');
        }
    };

    return (
        <div className="review-modal-overlay">
            <div className="review-modal">
                <button className="close-button" onClick={onClose}>×</button>
                <h2>{existingReview ? 'Edit Your Review' : 'Add Your Review'}</h2>

                <form onSubmit={handleSubmit}>
                    <label>Your Rating:</label>
                    <div className="stars">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                className={star <= rating ? 'filled' : ''}
                                onClick={() => setRating(star)}
                            >★</span>
                        ))}
                    </div>

                    <label>Your Review:</label>
                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Write your review here..."
                        required
                    />

                    <div className="button-group">
                        <button type="submit" className="submit-button">
                            {existingReview ? 'Update Review' : 'Submit Review'}
                        </button>

                        {existingReview && (
                            <button
                                type="button"
                                className="delete-button"
                                onClick={handleDelete}
                            >
                                Delete Review
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReviewModal;

