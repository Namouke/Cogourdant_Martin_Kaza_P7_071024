import React from "react";
import { Link } from "react-router-dom";

const logoHeader = require('../assets/Logo-Kaza/LOGO.header.png')

const Header = () => {
    return (
        <header className="header">
            <img src={logoHeader} className="header__logo" alt="logo-header"></img>
            <nav className="header__nav">
                <Link to="/" className="nav__button__acceuil">Accueil</Link>
                <Link to="/about" className="nav__button__propos">A Propos</Link>
            </nav>
        </header>
    );
};

export default Header;