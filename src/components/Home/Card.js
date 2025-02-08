import React from "react";
import { Link } from "react-router-dom";
import "../../style/components/home/card.scss"

const card = (props) => {
    const { img, title, alt, id, className = "" } = props;

    return (
        <Link to={`/housing/${id}`} className={`card ${className}`}>
            <img src={img} className="card__img" alt={alt}></img>
            <p className="card__title">{title}</p>
        </Link>
    );

}

export default card;
