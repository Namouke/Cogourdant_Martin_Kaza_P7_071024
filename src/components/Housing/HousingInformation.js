import React from 'react';
import Tags from '../../components/Housing/HousingTag'
import RatingStarFilled from '../../assets/starFilled.png'
import RatingStarEmpty from '../../assets/starEmpty.png'
import "../../style/components/housing/housingInformation.scss"



const HousingInformation = ({ housingData }) => {

    return (
        <section className="housingInformation">
            <div className="housingInformation__contain__left">
                <p className="housingInformation__title">{housingData.title}</p>
                <p className="housingInformation__location">{housingData.location}</p>
                <div className='housingInformation__tag'>
                    {housingData.tags.map((tag, index) => (
                        <Tags key={index} tag={tag} />
                    ))}
                </div>
            </div>
            <div className="housingInformation__contain__right">
                <div className='housingInformation__host'>
                    <p className="housingInformation__host__name">{housingData.host.name}</p>
                    <img src={housingData.host.picture} alt={housingData.host.name} className="housingInformation__host__picture" />
                </div>

                <div className="housingInformation__rating">
                    {[...Array(5)].map((_, index) => (
                        <img key={index}
                            src={index < housingData.rating ? RatingStarFilled : RatingStarEmpty}
                            alt="Etoile"
                            className="housingInformation__rating__star" />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HousingInformation