import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./CompareFragrances.css";
import scalesImage from "../assets/scales.png";

function CompareFragrances() {
    const location = useLocation();
    const navigate = useNavigate();
    const products = location.state?.products || [];

    const perfumeLeft = products[0];
    const perfumeRight = products[1];

    const handleCompare = () => {
        navigate("/fragrance-details", {
            state: { products },
        });
    };

    return (
        <div className="compare-wrapper">
            <h2 className="compare-title">COMPARE FRAGRANCES</h2>

            <div className="compare-container">
                <div className="compare-icon-wrapper">
                    <div className="empty-card"></div>

                    <img src={scalesImage} alt="Scales" className="scales-image" />

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

                <button className="compare-button" onClick={handleCompare}>
                    Compare
                </button>
            </div>
        </div>
    );
}

export default CompareFragrances;
