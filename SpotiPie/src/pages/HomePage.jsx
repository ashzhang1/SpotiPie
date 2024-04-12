import { useState, useRef } from 'react';
import LandingSection from '../components/LandingSection';
import FeatureSection from '../components/FeatureSection';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function HomePage() {

  const featureSectionRef = useRef(null);

  const handleFeaturesClick = () => {
    featureSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
        <div className='home--page--landing--section'>
            <NavBar onFeaturesClick={handleFeaturesClick}/>
            <LandingSection/>
        </div>
        <div ref={featureSectionRef} className='home--page--feature--section'>
            <FeatureSection />
        </div>
        <Footer />
    </>
  )
}
