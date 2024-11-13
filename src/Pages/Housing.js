import React from 'react';
import HousingCarrousel from '../components/HousingCarrousel';
import HousingInformation from '../components/HousingInformation';
import HousingCollapse from '../components/HousingCollapse';
import logementData from '../data/logements.json';


const HousingPage = () => {
    return (
        <section className='housing'>
            <HousingCarrousel logementData={logementData} />
            <HousingInformation logementData={logementData} />
            <HousingCollapse logementData={logementData} />
        </section>
    )
};

export default HousingPage;