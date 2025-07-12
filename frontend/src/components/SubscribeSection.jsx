import React from 'react';
import './SubscribeSection.css';

function SubscribeSection() {
    return (
        <section className="subscribe-section">
            <h2 className="subscribe-title">Subscribe To Our Emails</h2>
            <p className="subscribe-text">
                We'll send you the latest information by email, exclusive to registered users.
            </p>
            <form className="subscribe-form">
                <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className="subscribe-input"
                    required
                />
                <button type="submit" className="subscribe-button">
                    Subscribe
                </button>
            </form>
        </section>
    );
}

export default SubscribeSection;

