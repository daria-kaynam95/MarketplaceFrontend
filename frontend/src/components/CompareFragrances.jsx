import React from "react";
import "./CompareFragrances.css";

function CompareFragrances({ perfumeLeft, perfumeRight }) {
    return (
        <div className="compare-wrapper">
            <h2 className="compare-title">COMPARE FRAGRANCES</h2>

            <div className="compare-container">
                <div className="compare-icon-wrapper">
                    {/* фоновая карточка */}
                    <div className="empty-card"></div>
                    {/* весы */}
                    <img
                        src="/assets/icons/scales.png"
                        alt="Scales"
                        className="scales-image"
                    />

                    {/* Левая карточка */}
                    {perfumeLeft && (
                        <div className="compare-card compare-card-left">
                            <img
                                src={perfumeLeft.image}
                                alt={perfumeLeft.name}
                                className="compare-image"
                            />
                            <p className="compare-name">{perfumeLeft.name}</p>
                        </div>
                    )}

                    {/* Правая карточка */}
                    {perfumeRight && (
                        <div className="compare-card compare-card-right">
                            <img
                                src={perfumeRight.image}
                                alt={perfumeRight.name}
                                className="compare-image"
                            />
                            <p className="compare-name">{perfumeRight.name}</p>
                        </div>
                    )}
                </div>

                <button className="compare-button">Compare</button>
            </div>
        </div>
    );
}

export default CompareFragrances;
