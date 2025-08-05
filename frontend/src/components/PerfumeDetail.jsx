import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import perfumes from '../data/perfumeAllData';
import ReviewModal from '../components/ReviewModal';
import ScentIntelChart from '../components/ScentIntelChart';
import ReviewCard from '../components/ReviewCard';
import ReviewSummaryPanel from '../components/ReviewSummaryPanel';
import { AiOutlineHeart } from 'react-icons/ai';

import { useFavorites } from '../context/FavoriteContext';
import { CartContext } from '../context/CartContext';

import './PerfumeDetail.css';

const PerfumeDetail = () => {
    const { id } = useParams();
    const perfume = perfumes.find(p => String(p.id) === String(id));
    const { addToFavorites } = useFavorites();
    const { addToCart } = useContext(CartContext);

    const [showReviewModal, setShowReviewModal] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [userReview, setUserReview] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const userId = localStorage.getItem('userId');

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch(`https://localhost:7225/api/reviews?id=${id}`);
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

    const isEvenImage = perfume.compositionImage.includes('compo2');

    const averageRating = reviews.length
        ? reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
        : 0;

    const ratingBreakdown = {
        5: reviews.filter(r => r.rating === 5).length,
        4: reviews.filter(r => r.rating === 4).length,
        3: reviews.filter(r => r.rating === 3).length,
        2: reviews.filter(r => r.rating === 2).length,
        1: reviews.filter(r => r.rating === 1).length,
    };

    return (
        <div className="perfume-detail-wrapper">
            <div className="perfume-detail-left">
                <button className="favorite-button" onClick={() => addToFavorites(perfume)}>
                    Add to Favorite
                    <AiOutlineHeart size={20} style={{ marginLeft: '6px' }} />
                </button>

                <div className="perfume-image-wrapper">
                    <img src={perfume.image} alt={perfume.name} className="perfume-detail-image" />
                </div>
            </div>

            <div className="perfume-detail-card">
                <div className="perfume-detail-info">
                    <p className="perfume-detail-brand">{perfume.brand}</p>
                    <h2 className="perfume-detail-name">{perfume.name}</h2>
                    <div className="perfume-detail-volume-dropdown">{perfume.volume} ▼</div>
                    <p className="perfume-detail-description">{perfume.description}</p>
                    <p className="perfume-detail-price">${perfume.price} USD</p>

                    <div className="perfume-detail-actions">
                        <div className="quantity-controls">
                            <button onClick={decreaseQuantity}>-</button>
                            <span>{quantity}</span>
                            <button onClick={increaseQuantity}>+</button>
                        </div>

                        <button
                            className="perfume-detail-add-to-cart"
                            onClick={() => addToCart({ ...perfume, quantity })}
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>

            {perfume.scentIntel && perfume.compositionImage && (
                <div className="perfume-intel-composition">
                    <div className="intel-block">
                        <h3>Scent Intel</h3>
                        <ScentIntelChart
                            scentIntel={perfume.scentIntel}
                            type={parseInt(perfume.id.replace(/\D/g, '')) % 2 === 0 ? 'even' : 'odd'}
                        />
                    </div>

                    <div className="composition-block">
                        <h3>Composition</h3>
                        <div className="composition-image-wrapper">
                            <img
                                src={perfume.compositionImage}
                                alt="Composition"
                                className="composition-image"
                            />
                            {isEvenImage ? (
                                <>
                                    <div className="line line-ambrette"></div>
                                    <div className="line line-fruits"></div>
                                    <div className="line line-rose"></div>
                                </>
                            ) : (
                                <>
                                    <div className="line line-citrus"></div>
                                    <div className="line line-neroli"></div>
                                </>
                            )}
                            <div className="composition-labels">
                                {isEvenImage ? (
                                    <>
                                        <span className="label ambrette">Ambrette</span>
                                        <span className="label fruits">Fruits</span>
                                        <span className="label rose">Rose</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="label citrus">Citrus</span>
                                        <span className="label neroli">Neroli</span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showReviewModal && (
                <ReviewModal
                    onClose={() => setShowReviewModal(false)}
                    perfumeId={perfume.id}
                    existingReview={userReview}
                />
            )}

            <div className="review-section">
                <h3 className="reviews-title">Reviews</h3>

                <div className="perfume-review-section">
                    <ReviewSummaryPanel
                        averageRating={averageRating}
                        totalReviews={reviews.length}
                        ratingBreakdown={ratingBreakdown}
                        onAddReviewClick={() => setShowReviewModal(true)}
                        hasUserReview={!!userReview}
                    />

                    <div className="perfume-detail-reviews">
                        {userReview && (
                            <ReviewCard
                                userName="You"
                                rating={userReview.rating}
                                text={userReview.text}
                                isConfirmed={true}
                            />
                        )}

                        {reviews
                            .filter(r => String(r.userId) !== String(userId))
                            .map(r => (
                                <ReviewCard
                                    key={r.id}
                                    userName={r.userName}
                                    rating={r.rating}
                                    reviewText={r.reviewText}
                                    isConfirmed={r.isConfirmed}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PerfumeDetail;
