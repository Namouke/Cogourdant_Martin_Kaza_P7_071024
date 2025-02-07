import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import HousingCarrousel from '../components/Housing/HousingCarrousel';
import HousingInformation from '../components/Housing/HousingInformation';
import Collapse from '../components/Collapse';
import logementData from '../data/logements.json';
import "../style/pages/_housing.scss"
import "../style/components/housing/hoursingCollapse.scss"



const HousingPage = () => {
    const { id } = useParams();
    const housingData = logementData.find((item) => item.id === id.toString());

    if (!housingData) {
        return <Navigate to="/error" replace />;
    }

    return (
        <section className='housing'>
            <HousingCarrousel housingData={housingData} />
            <HousingInformation housingData={housingData} />

            <div className='housing__collapse'>
                <Collapse title="Description" className="housing__collapse__description">
                    <p>{housingData.description}</p>
                </Collapse>
                <Collapse title="Équipements" className="housing__collapse__equipement">
                    <ul>
                        {housingData.equipments.map((equipment, index) => (
                            <li key={index}
                            >{equipment}</li>
                        ))}
                    </ul>
                </Collapse>
            </div>

        </section>
    )
};

export default HousingPage;