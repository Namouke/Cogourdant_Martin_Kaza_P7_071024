import React from 'react';
import Banner from '../components/Banner.js'
import Collapse from '../components/Collapse'
import Data from '../data/collapseAboutData'
import imgAbo from '../assets/imageAbout.png'
import '../style/pages/_about.scss'


const AboutPage = () => {
  return (
    <section className='about'>
      <Banner img={imgAbo} alt="Image page A propos" className="about__banner"/>
      {Data.map((item, index) => (
        <Collapse key={index} title={item.title}>
          <p>{item.content}</p>
        </Collapse>
      ))}
    </section>

  );
};

export default AboutPage;