// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-content">
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home Page</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/products">Our Products</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                    <h3>Our Social Handle</h3>
                    <ul class="social-links">
                        <li>
                            <a href="https://www.instagram.com/nationalindustrialcorporation/profilecard/?igsh=ZDRwcm45dnNsdzdi" 
                            class="social-link" 
                            target="_blank" 
                            rel="noopener noreferrer">
                                <img src="/img/instagram_icon.png" alt="Instagram" class="social-icon" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/profile.php?id=100095418270376&mibextid=ZbWKwL" 
                            class="social-link" 
                            target="_blank" 
                            rel="noopener noreferrer">
                                <img src="/img/facebook_icon.png" alt="Facebook" class="social-icon" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.indiamart.com/nationalindustrialcorporation-ghaziabad/" 
                            class="social-link" 
                            target="_blank" 
                            rel="noopener noreferrer">
                                <img src="/img/IndiaMART_icon.png" alt="IndiaMART" class="social-icon" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h3>Reach Us</h3>
                    <p>National Industrial Corporation</p>
                    <p>124 B CHANDER PURI HAPUR ROAD, Ghaziabad-201001, Uttar Pradesh, India</p>
                    <h3>Our Location</h3>
                    <p>
                        <a href="https://www.google.co.in/maps/dir//28.66796000,77.42438000" target="_blank" rel="noopener noreferrer">
                            Get Directions
                        </a>
                    </p>
                    <h3>Contact Details</h3>
                    <p>Keshav Gupta (Director)</p>
                    <p>Call: 8588068146</p>
                    <p>Naveen Gupta (CEO)</p>
                    <p>Call: 8505905089</p>
                    <p>Priyanka Saxena (Manager)</p>
                    <p>Call: 9540298340</p>
                    <p style={{ margin: "5px 0", fontSize: "small" }}>(85% Call Response Rate)</p>
                    <p>Email Address: </p>
                    <p>salesnic2023@gmail.com</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} National Industrial Corporation. All rights reserved.</p>
                <h5>Designed & Developed by Kanishk Singhal (kanishksinghal0209@gmail.com)</h5>
            </div>
        </footer>
    );
};

export default Footer;