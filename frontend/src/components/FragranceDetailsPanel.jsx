import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./FragranceDetailsPanel.css";

function FragranceDetailsPanel() {
    const location = useLocation();
    const products = location.state?.products || [];

    const perfumeLeft = products[0];
    const perfumeRight = products[1];

    const [activeTabLeft, setActiveTabLeft] = useState("scent");
    const [activeTabRight, setActiveTabRight] = useState("scent");

    return (
        <div className="details-wrapper">
            <h2 className="details-title">COMPARE FRAGRANCES</h2>

            <div className="details-content">
                {[perfumeLeft, perfumeRight].map((perfume, idx) => {
                    const isLeft = idx === 0;
                    const activeTab = isLeft ? activeTabLeft : activeTabRight;
                    const setActiveTab = isLeft ? setActiveTabLeft : setActiveTabRight;

                    return (
                        <div className="fragrance-box" key={perfume.id}>
                            <div className="tab-header">
                                <button
                                    className={activeTab === "scent" ? "active" : ""}
                                    onClick={() => setActiveTab("scent")}
                                >
                                    Scent Intel
                                </button>
                                <button
                                    className={activeTab === "composition" ? "active" : ""}
                                    onClick={() => setActiveTab("composition")}
                                >
                                    Composition
                                </button>
                            </div>

                            <img
                                src={perfume.image}
                                alt={perfume.name}
                                className="perfume-image"
                            />
                            <p className="perfume-name">{perfume.brand} — {perfume.name}</p>

                            <div className="tab-content">
                                {activeTab === "scent" ? (
                                    // Можно вставить график здесь позже
                                    <ul className="scent-list">
                                        {Object.entries(perfume.scentIntel).map(([note, value]) => (
                                            <li key={note}>
                                                <span className="note-name">{note}</span>
                                                <span className="note-value">{'★'.repeat(value)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <img
                                        src={perfume.compositionImage}
                                        alt="Composition"
                                        className="composition-image"
                                    />
                                )}
                            </div>

                            <button className="details-button">Details</button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default FragranceDetailsPanel;

