import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./HomePage.css";

const images = [
    "/img/magnetic/MEGA-150.jpg",
    "/img/power/RG-2100.jpg",
    "/img/welding-machine/WIZARD ARC SERIES.jpg",
    "/img/magnetic/COMMANDO-40.jpg",
    "/img/power/RB-500.jpg",
    "/img/power/PAINT-MIXER-rpm-16-1000x1000.webp",
    "/img/welding-machine/WIZARD MIG WELDING SERIES.jpg",
    "/img/welding-machine/WIZARD ARC SUBEMERGE.jpg",
    "/img/magnetic/COMMANDO-50.jpg",
];

const hsnCodes = [
    {
        code: "83112000",
        description: "Wire, rods, tubes, plates, electrodes and similar products, of base metal or of metal carbides, coated or cored with flux material, of a kind used for soldering, brazing, welding or deposition of metal or of metal carbides; wire and rods, of agglomerated base metal powder, used for metal spraying - cored wire of base metal, for electric arc - welding",
    },
    {
        code: "84613090",
        description: "Machine-tools for planing, shaping, slotting, broaching, gear cutting, gear grinding or gear finishing, sawing, cutting-off and other machine tools working by removing metal, or cermets, not elsewhere specified or included - broaching machines: other",
    },
    {
        code: "84682010",
        description: "Machinery and apparatus for soldering, brazing or welding, whether or not capable of cutting, other than those of heading 8515; gas-operated surface tempering machines and appliances - other gas-operated machinery and apparatus: welding or cutting machines",
    },
];

const HomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 4 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <Helmet>
                <title>National Industrial Corporation - Your Trusted Partner for Cutting-Edge Industrial Solutions</title>
                <meta name="description" content="For more than 4 years, National Industrial Corporation has been synonymous with world-class quality and high performance in the welding and industrial sector." />
                <meta name="keywords" content="Industrial Solutions, Welding, Power Tools, Magnetic Core Drills, National Industrial Corporation" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="http://www.nationalindustrialcorporations.com/" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="National Industrial Corporation" />
                <meta property="og:description" content="Your Trusted Partner for Cutting-Edge Industrial Solutions" />
                <meta property="og:image" content="/img/your-image.jpg" /> {/* Replace with an actual image URL */}
                <meta property="og:url" content="http://www.yourwebsite.com/" />
                <meta property="og:type" content="website" />
            </Helmet>
            <Navbar />
            <div className="home-content">
                {/* Welcome Section */}
                <div className="welcome-section">
                    {/* Left Section: Company Details */}
                    <div className="welcome-text">
                        <h1>National Industrial Corporation</h1>
                        <h2>Your Trusted Partner for Cutting-Edge Industrial Solutions</h2>
                        <p>
                            For more than 4 years, National Industrial Corporation has been synonymous
                            with world-class quality and high performance in the welding and industrial sector.
                            We focus on advanced R&D coupled with innovative ideas to make the latest advancements
                            in welding accessible to our customers globally.
                        </p>
                        <p>We believe in providing the best quality products to our clients across industries, while ensuring cost-effectiveness. We aim to provide genuine value and develop enduring relationships with our customers worldwide.</p>
                        <p>
                            Our product spectrum includes Global Quality Welding Electrodes, Flux Cored Wires,
                            Solid Mig/Tig Wires, and Electro Slag Strip Cladding, meeting the highest quality standards.
                        </p>
                        <button className="read-more-btn" onClick={() => window.location.href = '/about'}>+ Read More</button>
                    </div>

                    {/* Right Section: Carousel */}
                    <div className="welcome-images">
                        <div className="carousel">
                            {/* Fixed Highlight Frame */}
                            <div className="highlight-frame">
                                <img
                                    src={images[currentIndex]}
                                    alt={`Highlighted image of ${images[currentIndex].split('/').pop()}`} // Descriptive alt text
                                    className="carousel-image active"
                                    loading="lazy"
                                />
                            </div>

                            {/* Moving Images */}
                            <div className="carousel-images-container">
                                {images.map((image, index) => {
                                    const position = index === (currentIndex - 1 + images.length) % images.length
                                        ? "left"
                                        : index === (currentIndex + 1) % images.length
                                        ? "right"
                                        : "";

                                    return (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`Carousel image ${index + 1}`} // Descriptive alt text
                                            className={`carousel-image ${position}`}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Company Details Section */}
                <div className="company-details">
                    <h2>Company Information</h2>
                    <div className="info-row">
                        <div className="info-item">
                            <img src="/img/icons8-wholesaler-32.png" alt="Nature of Business" />
                            <h4>Nature of Business</h4>
                            <p>Wholesaler</p>
                        </div>
                        <div className="info-item">
                            <img src="/img/icons8-group-of-people-50.png" alt="Employees" />
                            <h4>Total Number of Employees</h4>
                            <p>11 to 25 People</p>
                        </div>
                        <div className="info-item">
                            <img src="/img/icons8-calender-64.png" alt="Year of Establishment" />
                            <h4>Year of Establishment</h4>
                            <p>2020</p>
                        </div>
                        <div className="info-item">
                            <img src="/img/icons8-document-50.png" alt="Legal Status" />
                            <h4>Legal Status of Firm</h4>
                            <p>Individual - Proprietor</p>
                        </div>
                        <div className="info-item">
                            <img src="/img/icons8-graph-50.png" alt="Annual Turnover" />
                            <h4>Annual Turnover</h4>
                            <p>Rs. 5 - 10 Crore</p>
                        </div>
                        <div className="info-item">
                            <img src="/img/icons8-invoice-50.png" alt="GST Number" />
                            <h4>GST Number</h4>
                            <p>09CAWPG6009F2ZF</p>
                        </div>
                    </div>
                </div>

                {/* New Product Cards Section */}
                <div className="products-section">
                    <h2>Our Products</h2>
                    <div className="products-container">
                        {/* Product Card 1 */}
                        <div className="product-card">
                            <img src="/img/cutter/tct-75mm.jpg" alt="Cutters" />
                            <h4>Cutters</h4>
                            <p>Precision cutters for professional use, offering cutting depths up to 110mm and diameters from 12 to 120mm. Durable and reliable for all your industrial needs.</p>
                        </div>
                        {/* Product Card 2 */}
                        <div className="product-card">
                            <img src="/img/power/AG100-100mm-AG115-115mm.jpg" alt="Power Tools" />
                            <h4>Power Tools</h4>
                            <p>Versatile and powerful tools for every task, from heat guns to angle grinders. Designed for durability and efficiency, these tools are perfect for professional and industrial applications.</p>
                        </div>
                        {/* Product Card 3 */}
                        <div className="product-card">
                            <img src="/img/welding-machine/WIZARD MIG WELDING SERIES.jpg" alt="Welding Machines" />
                            <h4>Welding Machines</h4>
                            <p>Advanced welding machines for precision and durability, ideal for ARC, MIG, and plasma cutting across various applications.</p>
                        </div>
                        {/* Product Card 4 */}
                        <div className="product-card">
                            <img src="/img/magnetic/COMMANDO-40.jpg" alt="Magnetic Core Drills" />
                            <h4>Magnetic Core Drills</h4>
                            <p>High-performance magnetic core drills designed for precision and efficiency. Ideal for metal drilling tasks with durable and versatile features.</p>
                        </div>
                        {/* Product Card 5 */}
                        <div className="product-card">
                            <img src="/img/electrodes/Mild Steel Welding Electrodes.webp" alt="Welding Electrodes" />
                            <h4>Welding Electrodes</h4>
                            <p>Wide range of electrodes for steel, alloy, casting, and cutting, ensuring high performance and durability.</p>
                        </div>
                        {/* Product Card 6 */}
                        <div className="product-card">
                            <img src="/img/flux/carbon-steel-flux-cored-wire-500x500.webp" alt="Flux Cored Wires" />
                            <h4>Flux Cored Wires</h4>
                            <p>Comprehensive flux-cored wire solutions for carbon steel, low alloy, stainless steel, and hard-facing applications, ensuring high-quality performance and durability.</p>
                        </div>
                        {/* Product Card 7 */}
                        <div className="product-card">
                            <img src="/img/mig-tig/Mig-Tig-Welding-Wire.webp" alt="Mig/Tig Wires" />
                            <h4>Mig/Tig Wires</h4>
                            <p><p>MIG/TIG wires are used for welding various alloys, offering resistance to corrosion, porosity-free deposits, and suitable for high-temperature applications.</p></p>
                        </div>
                        {/* Product Card 8 */}
                        <div className="product-card">
                            <img src="/img/smaw/saw-flux.jpg" alt="SMAW Welding" />
                            <h4>SMAW Welding</h4>
                            <p><p>SAW Flux, SAW Wire, and SAW Wire Flux Drum Pack offer high-quality submerged arc welding solutions for a variety of applications, ensuring smooth arc stability, toughness, and high radiographic quality.</p></p>
                        </div>
                        {/* Product Card 9 */}
                        <div className="product-card">
                            <img src="/img/welding-accessories/Polish_20241209_141920146.jpg" alt="Welding Accessories" />
                            <h4>Welding Accessories</h4>
                            <p>A variety of welding accessories, including cables, hoses, regulators, cutters, pre-heaters, gloves, and more, ensuring safety, precision, and durability in every application.</p>
                        </div>
                    </div>
                    <button className="more-products-btn" onClick={() => window.location.href = '/products'}>+ More Products</button>
                </div>

                {/* Business Channel Partners Section */}
                <div class="channel-partners-section">
                    <h2>Our Business Channel Partners</h2>
                    <div class="partners-container">
                        <div class="partner-card">
                            <img src="/img/partner-company-logo/Royal Arc Pvt Ltd.png" alt="Royal Arc Electrodes Ltd. Logo" />
                            <h4>Royal Arc Electrodes Ltd.</h4>
                        </div>
                        <div class="partner-card">
                            <img src="/img/partner-company-logo/d-and-h-india-limited-11d87-logo.jpg" alt="D.H. Enterprises Logo" />
                            <h4>D & H India Limited</h4>
                        </div>
                        <div class="partner-card">
                            <img src="/img/partner-company-logo/nexa.jpg" alt="NexaWeld Logo" />
                            <h4>NexaWeld</h4>
                        </div>
                        <div class="partner-card">
                            <img src="/img/partner-company-logo/Modi HiTech.png" alt="Modi Hitech India Ltd. Logo" />
                            <h4>Modi Hitech India Ltd.</h4>
                        </div>
                        <div class="partner-card">
                            <img src="/img/partner-company-logo/Modiarc.png" alt="Modiarc Electrodes Logo" />
                            <h4>Modiarc Electrodes</h4>
                        </div>
                        <div class="partner-card">
                            <img src="/img/partner-company-logo/wizard weld.jpg" alt="Wizard Weld Logo" />
                            <h4>Wizard Weld</h4>
                        </div>
                        <div class="partner-card">
                            <img src="/img/partner-company-logo/Ojaswi.jpg" alt="Ojasvi Machines Pvt Ltd Logo" />
                            <h4>Ojasvi Machines Pvt Ltd</h4>
                        </div>
                        <div class="partner-card">
                            <img src="/img/partner-company-logo/ralli-wolf-logo.jpg" alt="RalliWolf Industries Ltd. Logo" />
                            <h4>RalliWolf Industries Ltd.</h4>
                        </div>
                        <div class="partner-card">
                            <img src="/img/partner-company-logo/zenith.webp" alt="Zenith Spray And Aerosols Private Limited Logo" />
                            <h4>Zenith Spray And Aerosols Pvt Ltd</h4>
                        </div>
                        <div class="partner-card">
                            <img src="/img/partner-company-logo/polymac.png" alt="Polymak Tools India Pvt. Ltd. Logo" />
                            <h4>Polymak Tools India Pvt. Ltd.</h4>
                        </div>
                        <div class="partner-card">
                            <img src="/img/partner-company-logo/xtra power.png" alt="Xtra Power Tools Private Limited Logo" />
                            <h4>Xtra Power Tools Private Limited</h4>
                        </div>
                    </div>
                    <p>And many more...</p>
                </div>

                {/* Our Clients Section */}
                <div class="clients-section">
                    <h2>Our Clients</h2>
                    <div class="clients-container">
                        <div class="client-card">
                            <img src="/img/client-company-logo/good-luck.png" alt="Goodluck India Limited Logo" />
                            <h4>Goodluck India Limited</h4>
                        </div>
                        <div class="client-card">
                            <img src="/img/client-company-logo/salasar.png" alt="Salasar Techno Engineering Ltd. Logo" />
                            <h4>Salasar Techno Engineering Ltd.</h4>
                        </div>
                        <div class="client-card">
                            <img src="/img/client-company-logo/gew.jpg" alt="GEW (INDIA) PRIVATE LIMITED Logo" />
                            <h4>GEW (INDIA) PRIVATE LIMITED</h4>
                        </div>
                        <div class="client-card">
                            <img src="/img/client-company-logo/moonwalk.svg" alt="Moonwalk Infraprojects Pvt. Ltd. Logo" />
                            <h4>Moonwalk Infraprojects Pvt. Ltd.</h4>
                        </div>
                        <div class="client-card">
                            <img src="/img/client-company-logo/epack-logo.webp" alt="EPACK Prefab" />
                            <h4>EPACK Prefab</h4>
                        </div>
                        <div class="client-card">
                            <img src="/img/client-company-logo/ece.png" alt="ECE INDUSTRIES LIMITED Logo" />
                            <h4>ECE INDUSTRIES LIMITED</h4>
                        </div>
                    </div>
                    <p>And many more...</p>
                </div>                

                {/* HSN Codes Section */}
                {/* <div className="hsn-codes-section">
                    <h2>HSN Codes</h2>
                    <div style={{ padding: "32px 32px"}}>
                        <table className="hsn-codes-table">
                            <thead>
                                <tr>
                                    <th>HSN Code</th>
                                    <th>HSN Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {hsnCodes.map((item) => (
                                    <tr key={item.code} className="hsn-code-item">
                                        <td><strong>{item.code}</strong></td>
                                        <td>{item.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p>And many more to explore...</p>
                </div> */}
                
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;