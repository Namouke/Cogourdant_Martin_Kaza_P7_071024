import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import vectorLeft from "../assets/carrouselVectorLeft.png";
import vectorRight from "../assets/carrouselVectorRight.png";

const CarrouselHousing = ({ logementData }) => {
    const { id } = useParams();
    // rajouter une condition si un erreur se produit dans l'id. ( reconduire sur la page error )
    const housingImg = logementData.find((item) => item.id === id);

    const [currentIndex, setCurrentIndex] = useState(0);

    const imgSuivante = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % housingImg.pictures.length);
    };

    // faire une version classic avec if

    const imgPrecedente = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + housingImg.pictures.length) % housingImg.pictures.length); // modulo division euclidienne
    };

    return (
        <section className="housingCarrousel">

            {housingImg.pictures.length > 1 && (
                <button onClick={imgPrecedente} className="housingCarrousel__button__left">
                    <img src={vectorLeft} className="housingCarrousel__button__vector" alt="Precedent" />
                </button>
            )}

            <img src={housingImg.pictures[currentIndex]} className="housingCarrousel__image"
                alt={`${housingImg.title} - slide ${currentIndex + 1}`} />


            {housingImg.pictures.length > 1 && (
                <button onClick={imgSuivante} className="housingCarrousel__button__right">
                    <img src={vectorRight} className="housingCarrousel__button__vector" alt="Suivant" />
                </button>
            )}

            {housingImg.pictures.length > 1 && (
                <p className="housingCarrousel__counter">
                    {currentIndex + 1}/{housingImg.pictures.length}
                </p>
            )}



        </section>
    )
}

export default CarrouselHousing;

