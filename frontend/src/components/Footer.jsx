import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faFacebookF,
    faTiktok,
    faTwitter,
    faPinterestP,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-branding">
                    <h2>Elyssia</h2>
                    <p>Sign Up For Elyssia Social Media</p>
                    <div className="social-icons">
                        <a href="#" aria-label="Instagram">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="#" aria-label="Facebook">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="#" aria-label="TikTok">
                            <FontAwesomeIcon icon={faTiktok} />
                        </a>
                        <a href="#" aria-label="Twitter">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="#" aria-label="Pinterest">
                            <FontAwesomeIcon icon={faPinterestP} />
                        </a>
                    </div>
                </div>

                <div className="footer-links">
                    <div>
                        <h4>About Us</h4>
                        <ul>
                            <li><a href="#">The Company</a></li>
                            <li><a href="#">Our Principles</a></li>
                            <li><a href="#">Partners</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Navigation</h4>
                        <ul>
                            <li><a href="#">New</a></li>
                            <li><a href="#">Catalog</a></li>
                            <li><a href="#">Offers</a></li>
                            <li><a href="#">Best Sellers</a></li>
                            <li><a href="#">Shop All</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">How to Order</a></li>
                            <li><a href="#">Shipping</a></li>
                            <li><a href="#">Payment</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Order Tracking</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Events & Launches</h4>
                        <ul>
                            <li><a href="#">Upcoming Launches</a></li>
                            <li><a href="#">Exclusive Events</a></li>
                            <li><a href="#">Past Highlights</a></li>
                            <li><a href="#">Join The List</a></li>
                            <li><a href="#">Brand Showcases</a></li>
                            <li><a href="#">Seasonal Campaigns</a></li>
                            <li><a href="#">Behind The Scenes</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 Elyssia All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;


