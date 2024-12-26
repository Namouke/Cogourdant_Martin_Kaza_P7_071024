import React from "react";
import "../../style/components/banner/aboutBanner.scss"

const aboutBannerImage = require('../../assets/imageAbout.png')

const aboutBanner = () => {
    return (
        <div className="about__banner">
            <img src={aboutBannerImage} className="about__banner__image" alt="A-propos-image"></img>
        </div>
    )
}

export default aboutBanner;