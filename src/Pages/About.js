import React from 'react';
import AboutBanner from '../components/AboutBanner'
import Collapse from '../components/Collapse'
import Data from '../data/collapseAboutData'

const AboutPage = () => {
  return (
    <section className='about'>
      <AboutBanner />
      {Data.map((item, index) => (
        <Collapse key={index} title={item.title}>
          <p>{item.content}</p>
        </Collapse>
      ))}
    </section>

  );
};

export default AboutPage;