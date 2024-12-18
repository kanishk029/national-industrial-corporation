// src/pages/ContactUs.js
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import './ContactUs.css'; 

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        query: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Your query has been submitted!');
        setFormData({ name: '', email: '', phone: '', query: '' }); // Reset form
    };

    return (
        <div>
            <Helmet>
                <title>Contact Us - National Industrial Corporation</title>
                <meta name="description" content="Get in touch with National Industrial Corporation for inquiries, support, and more. Fill out our contact form or reach us directly." />
                <meta name="keywords" content="Contact Us, National Industrial Corporation, Customer Support, Inquiries" />
                <meta name="robots" content="index, follow" />
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "National Industrial Corporation",
                        "url": "http://www.nationalindustrialcorporation.com",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+91-8045736795",
                            "contactType": "Customer Service",
                            "areaServed": "IN",
                            "availableLanguage": "English"
                        },
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "124 B Chander Puri Hapur Road",
                            "addressLocality": "Ghaziabad",
                            "postalCode": "201001",
                            "addressCountry": "IN"
                        }
                    }
                    `}
                </script>
            </Helmet>
            <Navbar />
            <div className="contact-us">
                <div className="pillars">
                    <h2 className="contact-heading">Contact Us</h2>
                    <div className="team-details">
                        <div className="team-member">
                            <img src="/img/Director.jpg" alt="Keshav Gupta - Director" />
                            <h4>Keshav Gupta</h4>
                            <p>Director</p>
                            <p>Call: 8588068146</p>
                        </div>
                        <div className="team-member">
                            <img src="/img/CEO.jpg" alt="Naveen Gupta - CEO" />
                            <h4>Naveen Gupta</h4>
                            <p>CEO</p>
                            <p>Call: 8505905089</p>
                        </div>
                        <div className="team-member">
                            <img src="/img/Manager.jpeg" alt="Priyanka Saxena - Manager" />
                            <h4>Priyanka Saxena</h4>
                            <p>Manager</p>
                            <p>Call: 9540298340</p>
                        </div>
                    </div>
                </div>

                <div className="company-info">
                    <h2>Locate Us At</h2>
                    <div className="company-info-main-box">
                        <h4>124 B Chander Puri Hapur Road, Ghaziabad-201001, Uttar Pradesh, India</h4>
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509845!2d77.4243800153167!3d28.66796048240457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1e8f6d5a2b7%3A0x2e7e8b6f1c5c8e5c!2s124%20B%20Chander%20Puri%20Hapur%20Road%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201001!5e0!3m2!1sen!2sin!4v1633028531845!5m2!1sen!2sin"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Company Location"
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className="query-section">
                    <h4>Have any query? Feel free to reach us</h4>
                    <div className="query-box">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div>
                                <label>Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label>Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label>Phone:</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label>Query Description:</label>
                                <textarea
                                    name="query"
                                    value={formData.query}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactUs;