import React from "react";
import Card from "../Home/Card"
import logements from "../../data/logements.json";
import "../../style/components/home/homeCards.scss"

const homeCards = () => {
    return (
        <section className="home__cards">
            {logements.map((logements) => (
                <Card
                    key={logements.id}
                    id={logements.id}
                    img={logements.cover}
                    title={logements.title}
                    alt={logements.title}
                />
            ))}

        </section>
    )
}

export default homeCards;