import React from "react";
import { Link } from "react-router-dom";

const logoHeader = require('../assets/Logo-Kaza/LOGO.header.png')

const Header = () => {
    return (
        <header className="header">
            <img src={logoHeader} className="header__logo" alt="logo-header"></img>
            <nav className="header__nav">
                <Link to="/" className="header__nav__acceuil">Accueil</Link>
                <Link to="/about" className="header__nav__propos">A Propos</Link>
            </nav>
        </header>
    );
};

export default Header;