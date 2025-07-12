import React from "react";
import "./CompareFragrances.css";
import scalesImg from "../assets/scales.png";

const EmptyCard = () => {
    return (
        <div className="empty-card">
            {/* Пустая карточка */}
        </div>
    );
};

const CompareFragrances = () => {
    return (
        <div className="compare-wrapper">
            <h2 className="compare-title">COMPARE FRAGRANCES</h2>

            <div className="compare-container">
                <div className="compare-icon-wrapper">
                    <EmptyCard />
                    <img src={scalesImg} alt="Scales" className="scales-image" />
                </div>

                <button className="compare-button">Compare</button>
            </div>
        </div>
    );
};

export default CompareFragrances;


