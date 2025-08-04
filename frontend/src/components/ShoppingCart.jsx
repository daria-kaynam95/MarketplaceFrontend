import React from "react";
import { useCart } from "../context/CartContext";
import "./ShoppingCart.css";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
    const { cartItems, removeFromCart, addToCart } = useCart();
    const navigate = useNavigate();

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleCheckout = () => {
        navigate("/checkout");
    };

    return (
        <div className="shopping-cart-container">
            <div className="continue-shopping" onClick={() => navigate("/catalog")}>
                &lt; Continue Shopping
            </div>
            <h1 className="cart-title">Shopping Cart</h1>

            <div className="cart-content">
                <div className="cart-left">
                    {cartItems.length === 0 ? (
                        <p className="empty-cart-message">Your cart is empty.</p>
                    ) : (
                        cartItems.map((item) => (
                            <div className="cart-item" key={item.id}>
                                {/* Карточка с картинкой */}
                                <div className="cart-item-card">
                                    <img src={item.image} alt={item.name} className="cart-image" />
                                </div>

                                <div className="cart-info">
                                    <p className="cart-brand">{item.brand}</p>
                                    <p className="cart-name">{item.name}</p>
                                    <p className="cart-volume">{item.volume}</p>

                                    <div className="cart-bottom">
                                        <p className="cart-price">${item.price}</p>

                                        <div className="cart-controls">
                                            <div className="cart-quantity">
                                                <button onClick={() => addToCart(item, -1)} disabled={item.quantity <= 1}>−</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => addToCart(item, 1)}>+</button>
                                            </div>

                                            <button className="remove-item" onClick={() => removeFromCart(item.id)}>
                                                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M18 8L16.005 19.346C15.9236 19.8094 15.6815 20.2292 15.3212 20.5317C14.9609 20.8342 14.5055 21 14.035 21H5.965C5.49454 21 5.03913 20.8342 4.67882 20.5317C4.31852 20.2292 4.07639 19.8094 3.995 19.346L2 8M19 5H13.375M13.375 5V3C13.375 2.46957 13.1643 1.96086 12.7892 1.58579C12.4141 1.21071 11.9054 1 11.375 1H8.625C8.09457 1 7.58586 1.21071 7.21079 1.58579C6.83571 1.96086 6.625 2.46957 6.625 3V5M13.375 5H6.625M1 5H6.625"
                                                        stroke="#731718"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="cart-right">
                    <div className="summary">
                        <p>Subtotal <span>${subtotal.toFixed(2)}</span></p>
                        <p>Shipping <span>$0</span></p>
                        <p>Taxes <span>$0</span></p>
                        <p>Discount <span>$0</span></p>
                        <hr />
                        <p className="total">Total <span>${subtotal.toFixed(2)}</span></p>
                    </div>
                    <button
                        className="cart-checkout-button"
                        onClick={handleCheckout}
                        disabled={cartItems.length === 0}
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;

