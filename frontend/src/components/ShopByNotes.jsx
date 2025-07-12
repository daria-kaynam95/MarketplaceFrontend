import React, { useRef, useState, useEffect } from "react";
import "./ShopByNotes.css";

import sweet from "../assets/notes/sweet.png";
import vanilla from "../assets/notes/vanilla.png";
import woody from "../assets/notes/woody.png";
import fresh from "../assets/notes/fresh.png";
import citrus from "../assets/notes/citrus.png";
import green from "../assets/notes/green.png";
import jasmine from "../assets/notes/jasmine.png";
import cardamom from "../assets/notes/cardamom.png";

const notes = [
    { label: "Sweet", image: sweet, className: "note-sweet" },
    { label: "Vanilla", image: vanilla, className: "note-vanilla" },
    { label: "Woody", image: woody, className: "note-woody" },
    { label: "Fresh", image: fresh, className: "note-fresh" },
    { label: "Citrus", image: citrus, className: "note-citrus" },
    { label: "Patchouli", image: green, className: "note-green" },
    { label: "Jasmine", image: jasmine, className: "note-jasmine" },
    { label: "Cardamom", image: cardamom, className: "note-cardamom" },
];

function ShopByNotes() {
    const sliderRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);

    const scroll = (direction) => {
        const scrollAmount = 300;
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: direction === "right" ? scrollAmount : -scrollAmount,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        const checkScroll = () => {
            if (sliderRef.current) {
                setShowLeftArrow(sliderRef.current.scrollLeft > 0);
            }
        };
        if (sliderRef.current) {
            sliderRef.current.addEventListener("scroll", checkScroll);
        }
        return () => {
            if (sliderRef.current) {
                sliderRef.current.removeEventListener("scroll", checkScroll);
            }
        };
    }, []);

    return (
        <section className="shop-notes">
            <h2>Shop By Notes</h2>
            <div className="slider-container">
                {showLeftArrow && (
                    <button className="slider-button left" onClick={() => scroll("left")}>
                        <span className="arrow">&#x276E;</span>
                    </button>
                )}
                <div className="notes-grid" ref={sliderRef}>
                    <div className="note-box highlight">
                        <p>NOTES</p>
                    </div>
                    {notes.map((note, index) => (
                        <div key={index} className={`note-box ${note.className}`}>
                            <div className="image-container">
                                <img src={note.image} alt={note.label} />
                            </div>
                            <p>{note.label}</p>
                        </div>
                    ))}
                </div>
                <button className="slider-button right" onClick={() => scroll("right")}>
                    <span className="arrow">&#x276F;</span>
                </button>
            </div>
        </section>
    );
}

export default ShopByNotes;

