import React from "react";
import "./HeroSection.css";
import bgImage from "../assets/perfume-bg.jpg";

function HeroSection() {
    return (
        <section className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
            <h1 className="headline">ELEGANT<br />SCENTS</h1>

            <div className="circle-wrapper">
                <svg className="text-circle" viewBox="0 0 200 200">
                    <defs>
                        <path
                            id="circlePath"
                            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                        />
                    </defs>
                    <text fill="#5a0f0f" fontSize="10" fontWeight="bold" letterSpacing="2">
                        <textPath
                            href="#circlePath"
                            startOffset="0"
                            textLength="470"
                        >
                            VIEW   ALL   PARFUMS   •   VIEW   ALL   PARFUMS   •   VIEW   ALL   PARFUMS   •
                        </textPath>
                    </text>
                </svg>

                <div className="icon-center">
                    <svg width="58" height="78" viewBox="0 0 58 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.4048 12.6955H39.5958V20.2384H18.4048V12.6955ZM47.8831 75.8428H10.1173L2 67.7213V28.3557L10.1173 20.2384H47.8831L56.0004 28.3557V67.7213L47.8831 75.8428ZM15.9201 12.6955H42.0803C43.2885 12.6955 44.2755 11.7085 44.2755 10.5045V4.19517C44.2755 2.98697 43.2885 2 42.0803 2H15.9201C14.7119 2 13.725 2.98697 13.725 4.19517V10.5044C13.725 11.7084 14.7119 12.6955 15.9201 12.6955Z" stroke="#6A0203" strokeWidth="2.49495" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11.0065 29.2456H46.9941M11.0065 29.2456V66.837H46.9941V29.2456M11.0065 29.2456L6.16504 24.1914M46.9941 29.2456L51.8356 24.1914M6.16504 71.8913L11.0065 66.8372M51.8356 71.8913L46.9941 66.8372" stroke="#6A0203" strokeWidth="2.49495" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M29.866 58.2737C29.3811 58.7757 28.6238 58.7757 28.143 58.2737L19.3152 49.0843C13.6059 43.1494 22.238 34.143 27.9559 40.0906L29.0024 41.184L30.0532 40.0906C35.7625 34.1515 44.3904 43.158 38.6939 49.0843L29.866 58.2737Z" stroke="#6A0203" strokeWidth="2.49495" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>

            <h2 className="subheadline">NEW<br />EMOTIONS</h2>
        </section>
    );
}

export default HeroSection;





