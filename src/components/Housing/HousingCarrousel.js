import React, { useState } from "react";
import vectorLeft from "../../assets/carrouselVectorLeft.png";
import vectorRight from "../../assets/carrouselVectorRight.png";
import "../../style/components/housing/housingCarrousel.scss"


const CarrouselHousing = ({ housingData }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const imgSuivante = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % housingData.pictures.length);
    };


    const imgPrecedente = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + housingData.pictures.length) % housingData.pictures.length); // modulo division euclidienne
    };

    return (
        <section className="housingCarrousel">

            {housingData.pictures.length > 1 && (
                <button onClick={imgPrecedente} className="housingCarrousel__button__left">
                    <img src={vectorLeft} className="housingCarrousel__button__vector" alt="Precedent" />
                </button>
            )}

            <img src={housingData.pictures[currentIndex]} className="housingCarrousel__image"
                alt={`${housingData.title} - slide ${currentIndex + 1}`} />


            {housingData.pictures.length > 1 && (
                <button onClick={imgSuivante} className="housingCarrousel__button__right">
                    <img src={vectorRight} className="housingCarrousel__button__vector" alt="Suivant" />
                </button>
            )}

            {housingData.pictures.length > 1 && (
                <p className="housingCarrousel__counter">
                    {currentIndex + 1}/{housingData.pictures.length}
                </p>
            )}



        </section>
    )
}

export default CarrouselHousing;

