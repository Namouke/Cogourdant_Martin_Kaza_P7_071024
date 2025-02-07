import React from "react";
import "../style/components/banner.scss"

const Banner = (props) => {
    const { img, title, alt, className = "" } = props;

    return (
        <div className={`banner ${className}`}>
            <img src={img} className="banner__img" alt={alt}></img>
            <p className="banner__title">{title}</p>
        </div>
    );
};

export default Banner;