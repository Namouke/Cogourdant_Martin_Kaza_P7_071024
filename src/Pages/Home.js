import React from 'react';
import Banner from '../components/Banner.js';
import HomeCards from '../components/HomeCars';
import imgAcc from '../assets/imageAcceuil.png'
import "../style/pages/_Home.scss"


const HomePage = () => {
  return (
    <section className='home'>
      <Banner img={imgAcc} title="Chez vous, partout et ailleurs" alt="Image page d'accueil" />
      <HomeCards />
    </section>
  );
};

export default HomePage;