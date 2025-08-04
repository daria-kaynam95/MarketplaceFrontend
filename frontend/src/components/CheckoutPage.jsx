import React from "react";
import "./CheckoutPage.css";
import { useCart } from "../context/CartContext";

const CheckoutPage = () => {
    const { cartItems, addToCart, removeFromCart } = useCart();

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = 5;
    const taxes = subtotal * 0.1;
    const discount = 0;
    const total = subtotal + shipping + taxes - discount;

    const handleReturn = () => {
        window.location.href = "/cart";
    };

    return (
        <div className="checkout-container">
            <h2 className="checkout-title">Placing An Order</h2>

            <div className="checkout-grid">
                {/* LEFT: Order Summary */}
                <div className="order-summary">
                    <button className="return-button" onClick={handleReturn}>
                        ← Return To Shopping Cart
                    </button>

                    <h3 className="section-title">Order Summary</h3>

                    <div className="checkout-product-list">
                        {cartItems.length === 0 ? (
                            <p>No items in your cart.</p>
                        ) : (
                            cartItems.map((item) => (
                                <div className="checkout-cart-item" key={item.id}>
                                    <div className="checkout-cart-image-wrapper">
                                        <img src={item.image} alt={item.name} className="checkout-cart-image" />
                                    </div>

                                    <div className="checkout-cart-info">
                                        <p className="checkout-cart-brand">{item.brand}</p>
                                        <p className="checkout-cart-name">{item.name}</p>
                                        <p className="checkout-cart-volume">{item.volume}</p>

                                        <div className="checkout-cart-bottom">
                                            <p className="checkout-cart-price">${item.price}</p>

                                            <div className="checkout-cart-controls">
                                                <div className="checkout-cart-quantity">
                                                    <button onClick={() => addToCart(item, -1)} disabled={item.quantity <= 1}>−</button>
                                                    <span>{item.quantity}</span>
                                                    <button onClick={() => addToCart(item, 1)}>+</button>
                                                </div>

                                                <button className="checkout-remove-item" onClick={() => removeFromCart(item.id)}>
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

                    <div className="discount-section">
                        <label>Discount Code</label>
                        <div className="discount-input-group">
                            <input placeholder="Enter discount code" />
                            <button>Apply</button>
                        </div>

                        <div className="summary-totals">
                            <div>
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div>
                                <span>Shipping</span>
                                <span>${shipping.toFixed(2)}</span>
                            </div>
                            <div>
                                <span>Taxes</span>
                                <span>${taxes.toFixed(2)}</span>
                            </div>
                            <div>
                                <span>Discount</span>
                                <span>${discount.toFixed(2)}</span>
                            </div>
                            <div className="summary-total">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT: Checkout Form */}
                <div className="checkout-form">
                    <h3 className="section-title">Checkout</h3>

                    <div className="form-grid">
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <input id="firstName" placeholder="First name" />
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <input id="lastName" placeholder="Last name" />
                        </div>
                    </div>

                    <div className="form-grid email-phone">
                        <div>
                            <label htmlFor="email">Email</label>
                            <input id="email" placeholder="Email" />
                        </div>
                        <div>
                            <label htmlFor="phone">Phone Number</label>
                            <input id="phone" placeholder="00000 00000" />
                        </div>
                    </div>

                    <div className="shipping-details">
                        <div>
                            <label htmlFor="address1">Street Address Line 1</label>
                            <input id="address1" placeholder="Street address line 1" />
                        </div>
                        <div>
                            <label htmlFor="address2">Street Address Line 2</label>
                            <input id="address2" placeholder="Street address line 2" />
                        </div>
                        <div className="form-grid">
                            <div>
                                <label htmlFor="postal">Postal Code</label>
                                <input id="postal" placeholder="Postal code" />
                            </div>
                            <div>
                                <label htmlFor="city">City</label>
                                <input id="city" placeholder="City" />
                            </div>
                            <div>
                                <label htmlFor="country">Country</label>
                                <input id="country" placeholder="Country" />
                            </div>
                        </div>
                    </div>

                    <div className="payment-section">
                        <label>Payment Method</label>
                        <div className="payment-options">
                            <label>
                                <input type="radio" name="payment" /> Paypal
                            </label>
                            <label>
                                <input type="radio" name="payment" /> Credit Or Debit Card
                            </label>
                            <label>
                                <input type="radio" name="payment" /> COD
                            </label>
                        </div>

                        <div className="form-grid">
                            <div className="full-width">
                                <label htmlFor="card">Card Number</label>
                                <input id="card" placeholder="Card number" />
                            </div>
                            <div>
                                <label htmlFor="expire">Expire Date</label>
                                <input id="expire" placeholder="MM/YY" />
                            </div>
                            <div>
                                <label htmlFor="cvv">CVV</label>
                                <input id="cvv" placeholder="CVV" />
                            </div>
                        </div>
                    </div>

                    <div className="save-options">
                        <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span>Save my address for future purchases.</span>
                        </label>
                        <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span>Save my payment method for future purchases.</span>
                        </label>
                    </div>

                    <button className="checkout-button">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
