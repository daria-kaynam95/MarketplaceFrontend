import React, { useState } from 'react';
import './ReviewModal.css';

const ReviewModal = ({ onClose, perfumeId }) => {
    const [rating, setRating] = useState(0);
    const [text, setText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem('token');
            const response = await fetch('/api/reviews/create-review', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    perfumeId: perfumeId, // передаётся как prop
                    rating: rating,
                    comment: text,
                }),
            });

            if (response.ok) {
                onClose();
            } else {
                alert('Failed to submit review');
            }
        } catch (error) {
            console.error('Submit error:', error);
        }
    };

    return (
        <div className="review-modal-overlay">
            <div className="review-modal">
                <button className="close-button" onClick={onClose}>×</button>
                <h2>Add Your Review</h2>
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

                    <button type="submit" className="submit-button">Submit Review</button>
                </form>
            </div>
        </div>
    );
};

export default ReviewModal;
