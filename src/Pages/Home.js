import React from 'react';
import HomeBanner from '../components/HomeBanner';
import HomeCards from '../components/HomeCars';

const HomePage = () => {
  return (
    <section className='home'>
      <HomeBanner />
      <HomeCards />
    </section>
  );
};

export default HomePage;