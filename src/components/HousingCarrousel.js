import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import logementData from '../data/logements.json'; // passer en props
import vectorLeft from "../assets/carrouselVectorLeft.png";
import vectorRight from "../assets/carrouselVectorRight.png";

const CarrouselHousing = () => {
    const { id } = useParams();
    // rajouter une condition si un erreur se produit dans l'id. ( reconduire sur la page error )
    const housingImg = logementData.find((item) => item.id === id);

    const [currentIndex, setCurrentIndex] = useState(0);

    const imgSuivante = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % housingImg.pictures.length);
    };

    // faire une version classic avec if

    const imgPrecedente = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + housingImg.pictures.length) % housingImg.pictures.length);
    };

    return (
        <section className="housingCarrousel">
            <button onClick={imgPrecedente} className="housingCarrousel__button">
                <img src={vectorLeft} className="housingCarrousel__button__vector" alt="Precedent" />
            </button>
            <img src={housingImg.pictures[currentIndex]} className="housingCarrousel__image"
                alt={`${housingImg.title} - slide ${currentIndex + 1}`} />




            <button onClick={imgSuivante} className="housingCarrousel__button">
                <img src={vectorRight} className="housingCarrousel__button__vector" alt="Suivant" />
            </button>
        </section>
    )
}

export default CarrouselHousing;

