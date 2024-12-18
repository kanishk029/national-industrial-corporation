import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import './AboutUs.css';

const AboutUs = () => {
    const [currentIndex, setCurrentIndex] = useState(0); 
        const images = [ 
        "/img/company-images/IMG20241205163606.jpg",
        "/img/company-images/IMG20241205163550.jpg",
        "/img/company-images/Polish_20241207_154728402.jpg",
        "/img/company-images/Polish_20241207_154936395.jpg", 
        "/img/company-images/IMG_20241207_162250.jpg", 
        "/img/company-images/IMG20241205163407.jpg", 
        "/img/company-images/IMG20241205163817.jpg", 
        "/img/company-images/IMG20241205163907.jpg", 
        "/img/company-images/IMG20241205164004.jpg"
    ];

    // Declare imagesPerPage
    const imagesPerPage = 3;

    // Handle navigation
    const handleNext = () => { 
        setCurrentIndex((prevIndex) => 
            (prevIndex + 1) % Math.ceil(images.length / imagesPerPage)
        ); 
    };

    const handlePrev = () => { 
        setCurrentIndex((prevIndex) => 
            (prevIndex - 1 + Math.ceil(images.length / imagesPerPage)) % Math.ceil(images.length / imagesPerPage)
        ); 
    };

    return (
        <div>
            <Helmet>
                <title>About Us - National Industrial Corporation</title>
                <meta name="description" content="Learn about National Industrial Corporation, your trusted partner for cutting-edge industrial solutions, specializing in welding and industrial products." />
                <meta name="keywords" content="About Us, National Industrial Corporation, Industrial Solutions, Welding, Company Information" />
                <meta name="robots" content="index, follow" />

                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "National Industrial Corporation",
                        "url": "http://www.nationalindustrialcorporations.com",
                        "logo": "/img/nic_logo.jpg",
                        "sameAs": [
                            "https://www.facebook.com/yourprofile",
                            "https://www.twitter.com/yourprofile"
                        ],
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+91-8045736795",
                            "contactType": "Customer Service"
                        }
                    }
                    `}
                </script>
            </Helmet>
            <Navbar />
            <div className="about-us">
                {/* Background Image Section */}
                <div className="vision-section"
                    style={{
                        backgroundImage: `url('/img/welding-2819146_1920.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        position: 'relative', // Required for the overlay
                    }}>
                    <div className="overlay"></div> {/* Added overlay for better contrast */}
                    <h1>Our Vision</h1>
                    <p>
                    We believe in providing the best quality products to our clients across industries, while ensuring cost-effectiveness. We aim to provide genuine value and develop enduring relationships with our customers worldwide.
                    </p>
                </div>

                {/* About Us Section */}
                <div className="about-text">
                    <h2>National Industrial Corporation</h2>
                    <h3>Your Trusted Partner for Cutting-Edge Industrial Solutions</h3>
                    <div className="welcome-text">
                        <div style={{ padding: "0px 32px"}}>
                            <p>
                                For more than 4 years, National Industrial Corporation has been synonymous with world-class quality and high performance in the welding and industry. At National Industrial Corporation, we focus on advanced R&D coupled with innovative ideas to make the latest advancements in welding more accessible to our customers across the globe.
                            </p>
                            <p> 
                                In India, National Industrial Corporation has been the leader in bringing high technology to the local markets.The National Industrial Corporation product spectrum includes all Global Quality Welding Electrodes, Flux Cored Wires, Solid Mig/Tig Wires & Electro Slag Strip Cladding. 
                            </p>
                            <p>
                                Our welding products comply with the highest quality stan- dards, reflected in the array of approvals we have received from global certification agencies including LRA, ABS, DNV, BV, CE, KOC, KNPC & QP.
                            </p>
                        </div>
                    </div>
                    
                </div>

                {/* Company Information Section */}
                <div className="company-details">
                    <h2>Company Information</h2>
                    <div style={{ padding: "32px 32px"}}>
                        <table className="company-info-table">
                            <thead>
                                <tr>
                                    <th>Detail</th>
                                    <th>Information</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="company-info-item">
                                    <td>Nature of Business</td>
                                    <td>Wholesaler</td>
                                </tr>
                                <tr className="company-info-item">
                                    <td>Total Number of Employees</td>
                                    <td>11 to 25 People</td>
                                </tr>
                                <tr className="company-info-item">
                                    <td>Year of Establishment</td>
                                    <td>2020</td>
                                </tr>
                                <tr className="company-info-item">
                                    <td>Legal Status of Firm</td>
                                    <td>Individual - Proprietor</td>
                                </tr>
                                <tr className="company-info-item">
                                    <td>Annual Turnover</td>
                                    <td>Rs. 5 - 10 Crore</td>
                                </tr>
                                <tr className="company-info-item">
                                    <td>GST Number</td>
                                    <td>09CAWPG6009F2ZF</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
                {/* Awards Section */}
                <div className="awards-section">
                    <h2>Awards & Achievements</h2>
                    <div className="awards-container">
                        <div className="award-card">
                            <div className="award-image">
                                <img src="/img/certificates/Certificate 1.jpg" alt="Certificate 1" />
                            </div>
                            <div className="award-info">
                                <h3>Authorized Distributor for Welmet Technologies Pvt. Ltd.</h3>
                                <p>National Industrial Corporation is proudly appointed as an authorized distributor for Welmet Submerged Arc Welding Fluxes and Wires in the Ghaziabad region.</p>
                                <p>This certification underscores our partnership with Welmet Technologies to deliver high-quality welding products.</p>
                            </div>
                        </div>
                        <div className="award-card">
                            <div className="award-image">
                                <img src="/img/certificates/Certificate 2.jpg" alt="Certificate 2" />
                            </div>
                            <div className="award-info">
                                <h3>Authorized Dealer for Ralli Wolf Industries Ltd.</h3>
                                <p>We are an authorized dealer for Ralli Wolf products, including power tools, welding equipment, air tools, motors, and farm equipment.</p>
                                <p>This dealership is valid from 1st April 2024 to 31st March 2025, reflecting our commitment to providing top-notch industrial tools.</p>
                            </div>
                        </div>
                        <div className="award-card">
                            <div className="award-image">
                                <img src="/img/certificates/Certificate 3.jpg" alt="Certificate 3" />
                            </div>
                            <div className="award-info">
                                <h3>Certified Partner for Ojasvi Machines Pvt. Ltd.</h3>
                                <p>As a certified partner, National Industrial Corporation is authorized to sell and service Ojasvi products in the Ghaziabad region.</p>
                                <p>This certification highlights our dedication to distributing cutting-edge tools and ensuring excellent service.</p>
                            </div>
                        </div>
                        <div className="award-card">
                            <div className="award-image">
                                <img src="/img/certificates/Certificate 4.jpg" alt="Certificate 1" />
                            </div>
                            <div className="award-info">
                                <h3>Authorized Distributor for Royal Arc Electrodes Ltd.</h3>
                                <p>National Industrial Corporation (Ghaziabad) is proudly appointed as an authorized distributor for all Royal Arc Brand Welding Consumables.</p>
                                <p>This certification underscores our partnership with Royal Arc Electrodes Ltd. to deliver high-quality welding products in the Ghaziabad region.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Carousel Section */}
                <div className="image-carousel-section"> 
                    <h2>Our Infrastructure & Team</h2> 
                    <div className="about-carousel"> 
                        <button className="about-carousel-button left" onClick={handlePrev}>{"<"}</button> 
                        <div className="about-carousel-images-container">
                            {images.slice(currentIndex * imagesPerPage, currentIndex * imagesPerPage + imagesPerPage).map((image, index) => ( 
                                <img src={image} alt={`Company Image ${index + 1} - Description`} />
                            ))}
                        </div>
                        <button className="about-carousel-button right" onClick={handleNext}>{">"}</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;
