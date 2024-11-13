import React from 'react';
import { useParams } from 'react-router-dom';
import RatingStarFilled from '../assets/starFilled.png'
import RatingStarEmpty from '../assets/starEmpty.png'


const HousingInformation = ({ logementData }) => {
    const { id } = useParams();
    const housingInfo = logementData.find((item) => item.id === id);

    return (
        <section className="housingInformation">
            <div className="housingInformation__contain__left">
                <p className="housingInformation__title">{housingInfo.title}</p>
                <p className="housingInformation__location">{housingInfo.location}</p>
                <div className='housingInformation__tag'>
                    {housingInfo.tags.map((tag, index) => (
                        <span key={index} className="housingInformation__tag__contain">{tag}</span>
                    ))}
                </div>
            </div>
            <div className="housingInformation__contain__right">
                <div className='housingInformation__host'>
                    <p className="housingInformation__host__Name">{housingInfo.host.name}</p>
                    <div>
                        <img src={housingInfo.host.picture} alt={housingInfo.host.name} className="housingInformation__host__Picture" />
                    </div>
                </div>

                <div className="housingInformation__rating">
                    {[...Array(5)].map((_, index) => (
                        <img key={index}
                            src={index < housingInfo.rating ? RatingStarFilled : RatingStarEmpty}
                            alt="Etoile"
                            className="housingInformation__rating__star" />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HousingInformation