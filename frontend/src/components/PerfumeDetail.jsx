import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import perfumes from '../data/perfumeAllData';
import ReviewModal from '../components/ReviewModal';
import { AiOutlineHeart } from 'react-icons/ai'; 
import './PerfumeDetail.css';

const PerfumeDetail = () => {
    const { id } = useParams();
    const perfume = perfumes.find(p => String(p.id) === String(id));

    const [showReviewModal, setShowReviewModal] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [userReview, setUserReview] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const userId = localStorage.getItem('userId');

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch(`https://marketplaceapi20250628113538.azurewebsites.net/api/reviews?id=${id}`);
                const data = await response.json();
                setReviews(data);

                const found = data.find(r => String(r.userId) === String(userId));
                setUserReview(found || null);
            } catch (err) {
                console.error('Failed to load reviews:', err);
            }
        };

        fetchReviews();
    }, [id, showReviewModal]);

    const increaseQuantity = () => setQuantity(prev => prev + 1);
    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(prev => prev - 1);
    };

    if (!perfume) {
        return <div className="not-found">Product not found</div>;
    }

    return (
        <div className="perfume-detail-wrapper">
            {/* Левая часть — кнопка и изображение */}
            <div className="perfume-detail-left">
                <button className="favorite-button">
                    <AiOutlineHeart size={20} style={{ marginRight: '6px' }} />
                    Add to Favorite
                </button>
                <img
                    src={perfume.image}
                    alt={perfume.name}
                    className="perfume-detail-image"
                />
            </div>

            {/* Правая часть — карточка */}
            <div className="perfume-detail-card">
                <div className="perfume-detail-info">
                    <p className="perfume-detail-brand">{perfume.brand}</p>
                    <h2 className="perfume-detail-name">{perfume.name}</h2>

                    <div className="perfume-detail-volume-dropdown">
                        {perfume.volume} ▼
                    </div>

                    <p className="perfume-detail-description">
                        {perfume.description}
                    </p>

                    <p className="perfume-detail-price">${perfume.price} USD</p>

                    <div className="perfume-detail-actions">
                        <div className="quantity-controls">
                            <button onClick={decreaseQuantity}>-</button>
                            <span>{quantity}</span>
                            <button onClick={increaseQuantity}>+</button>
                        </div>

                        <button className="perfume-detail-add-to-cart">
                            Add to cart
                        </button>

                        <button
                            className="perfume-detail-review-btn"
                            onClick={() => setShowReviewModal(true)}
                        >
                            {userReview ? 'Edit Your Review' : 'Add Your Review'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Модалка */}
            {showReviewModal && (
                <ReviewModal
                    onClose={() => setShowReviewModal(false)}
                    perfumeId={perfume.id}
                    existingReview={userReview}
                />
            )}

            {/* Отзывы */}
            <div className="perfume-detail-reviews">
                <h3>Reviews</h3>
                {reviews.length === 0 ? (
                    <p>No reviews yet</p>
                ) : (
                    reviews.map((r) => (
                        <div key={r.id} className="review-card">
                            <strong>Rating:</strong> {r.rating} ★<br />
                            <strong>Review:</strong> {r.reviewText}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default PerfumeDetail;
