import React from "react";
import "./LimitedTimeOffer.css";
import backgroundImage from "../assets/limited-offer.jpg";

const LimitedTimeOffer = () => {
    return (
        <div
            className="limited-offer-section"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            {/* Ценники */}
            <div className="price-tag price-tag-1">
                <span className="old-price">$289</span>
                <span className="new-price">$189</span>
            </div>
            <div className="price-tag price-tag-2">
                <span className="old-price">$208</span>
                <span className="new-price">$125</span>
            </div>
            <div className="price-tag price-tag-3">
                <span className="old-price">$237</span>
                <span className="new-price">$140</span>
            </div>

            {/* Текст и таймер */}
            <div className="limited-offer-content">
                <h2>
                    UP TO <span className="highlight">30%</span> OFF
                </h2>
                <h3>LIMITED TIME OFFER</h3>
                <p>MAKE YOUR DREAM COME TRUE</p>

                <div className="limited-offer-actions">
                    <div className="countdown">
                        <div className="time-block">
                            <span className="time-number">07</span>
                            <span className="time-label">Day</span>
                        </div>
                        <div className="separator">:</div>
                        <div className="time-block">
                            <span className="time-number">15</span>
                            <span className="time-label">Hours</span>
                        </div>
                        <div className="separator">:</div>
                        <div className="time-block">
                            <span className="time-number">49</span>
                            <span className="time-label">Minutes</span>
                        </div>
                        <div className="separator">:</div>
                        <div className="time-block">
                            <span className="time-number">08</span>
                            <span className="time-label">Seconds</span>
                        </div>
                    </div>

                    <button className="learn-more-btn">LEARN MORE</button>
                </div>
            </div>
        </div>
    );
};

export default LimitedTimeOffer;




