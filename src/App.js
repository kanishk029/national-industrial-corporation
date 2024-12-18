// src/App.js
import React from 'react';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import OurProducts from './pages/OurProducts';
import ContactUs from './pages/ContactUs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/products" element={<OurProducts />} />
                <Route path="/contact" element={<ContactUs />} />
            </Routes>
        </Router>
    );
};

export default App;