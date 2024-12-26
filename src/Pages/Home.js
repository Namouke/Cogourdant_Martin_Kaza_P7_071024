import React from 'react';
import HomeBanner from '../components/Banner/HomeBanner';
import HomeCards from '../components/HomeCars';
import "../style/pages/_Home.scss"


const HomePage = () => {
  return (
    <section className='home'>
      <HomeBanner />
      <HomeCards />
    </section>
  );
};

export default HomePage;