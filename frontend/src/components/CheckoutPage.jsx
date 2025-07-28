import React from "react";
import "./CheckoutPage.css";

const CheckoutPage = () => {
    return (
        <div className="checkout-container">
            <h2 className="checkout-title">Placing An Order</h2>

            <div className="checkout-grid">
                {/* LEFT: Order Summary */}
                <div className="order-summary">
                    <button className="return-button">← Return To Shopping Cart</button>

                    <h3 className="section-title">Order Summary</h3>

                    <div className="product-list">
                        {[1, 2].map((item, index) => (
                            <div key={index} className="product-item">
                                <div className="quantity-control">
                                    <button>−</button>
                                    <span>1</span>
                                    <button>+</button>
                                </div>
                                <button className="delete-button">🗑️</button>
                            </div>
                        ))}
                    </div>

                    <div className="discount-section">
                        <label>Discount Code</label>
                        <div className="discount-input-group">
                            <input placeholder="Enter discount code" />
                            <button>Apply</button>
                        </div>

                        <div className="summary-totals">
                            <div><span>Subtotal</span><span>$0</span></div>
                            <div><span>Shipping</span><span>$0</span></div>
                            <div><span>Taxes</span><span>$0</span></div>
                            <div><span>Discount</span><span>$0</span></div>
                            <div className="summary-total"><span>Total</span><span>$0</span></div>
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
                            <label><input type="radio" name="payment" /> Paypal</label>
                            <label><input type="radio" name="payment" /> Credit Or Debit Card</label>
                            <label><input type="radio" name="payment" /> COD</label>
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

                    <div class="save-options">
                        <label class="custom-checkbox">
                            <input type="checkbox" />
                            Save my address for future purchases.
                        </label>
                        <label class="custom-checkbox">
                            <input type="checkbox" />
                            Save my payment method for future purchases.
                        </label>
                    </div>

                    <button className="checkout-button">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
