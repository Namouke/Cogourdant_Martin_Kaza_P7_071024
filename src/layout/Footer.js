import React from "react";

const logoFooter = require('../assets/Logo-Kaza/LOGO.footer.png')

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <img src={logoFooter} alt="Logo-Footer" className="footer__logo"></img>
                <p className="rights__reserved">© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;