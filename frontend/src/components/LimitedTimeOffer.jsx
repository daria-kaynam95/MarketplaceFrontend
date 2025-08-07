import React, { useState, useEffect, useRef } from "react";
import "./LimitedTimeOffer.css";
import backgroundImage from "../assets/limited-offer.jpg";

const LimitedTimeOffer = () => {
    const targetDateRef = useRef(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const formatTime = (time) => (time < 10 ? `0${time}` : time);

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDateRef.current - now;

            if (distance <= 0) {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div
            className="limited-offer-section"
            style={{ backgroundImage: `url(${backgroundImage})` }}
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
                            <span className="time-number">{formatTime(timeLeft.days)}</span>
                            <span className="time-label">Day</span>
                        </div>
                        <div className="separator">:</div>
                        <div className="time-block">
                            <span className="time-number">{formatTime(timeLeft.hours)}</span>
                            <span className="time-label">Hours</span>
                        </div>
                        <div className="separator">:</div>
                        <div className="time-block">
                            <span className="time-number">{formatTime(timeLeft.minutes)}</span>
                            <span className="time-label">Minutes</span>
                        </div>
                        <div className="separator">:</div>
                        <div className="time-block">
                            <span className="time-number">{formatTime(timeLeft.seconds)}</span>
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

