
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HousingPage from "./Pages/Housing";
import AboutPage from "./Pages/About";
import ErrorPage from "./Pages/Error";
import HomePage from "./Pages/Home";
import Header from "./layout/Header";
import Footer from "./layout/Footer"

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/housing/:id" element={<HousingPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default AppRouter;
