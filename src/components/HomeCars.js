import React from "react";
import { Link } from "react-router-dom";
import logementData from "../data/logements.json";

const homeCards = () => {
    return (
        <section className="home__cards">
            {logementData.map((logement) => (
                <Link to={`/housing/${logement.id}`}
                    key={logement.id}
                    className='cards__link'>
                    <div className="cards__content">
                        <img src={logement.cover} alt={logement.title} className="cards__image"></img>
                        <p className="cards__title">{logement.title}</p>
                    </div>
                </Link>
            ))}
        </section>
    )
}

export default homeCards;