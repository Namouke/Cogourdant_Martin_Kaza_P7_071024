import React from "react";
import { Link } from "react-router-dom";

const cards = (props) => {
    const { img, title, alt, id, className = "" } = props;

    return (
        <Link to={`/housing/${id}`} className={`cards ${className}`}>
            <img src={img} className="cards__img" alt={alt}></img>
            <p className="cards__title">{title}</p>
        </Link>
    );

}

export default cards;
