import React from "react";
import { Link } from "react-router-dom";
import logementData from "../../data/logements.json";
import "../../style/components/home/homeCards.scss"

const homeCards = () => {
    return (
        <section className="home__cards">
            {logementData.map((logement) => (
                <Link to={`/housing/${logement.id}`}
                    key={logement.id}
                    className='home__cards__link'>
                    <div className="home__cards__content">
                        <img src={logement.cover} alt={logement.title} className="home__cards__content__image"></img>
                        <p className="home__cards__content__title">{logement.title}</p>
                    </div>
                </Link>
            ))}
        </section>
    )
}

export default homeCards;