import { useState, useRef } from 'react';
import LandingSection from '../components/LandingSection'
import FeatureSection from '../components/FeatureSection'
import NavBar from '../components/NavBar'
import { authEndpoint, clientId, redirectUri, scopes } from "../data/spotifyApiConfig"

export default function HomePage() {
  const SPACE_PARAM = "%20"
  const SCOPES_URL_PARAM = scopes.join(SPACE_PARAM)

  const featureSectionRef = useRef(null);

  const handleFeaturesClick = () => {
    featureSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  function handleSpotifyLogin() {
    window.location= `${authEndpoint}?client_id=${clientId}&redirect_&redirect_uri=${redirectUri}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`
  }

  return (
    <div>
        <div className='home--page--landing--section'>
            <NavBar onFeaturesClick={handleFeaturesClick} handleSpotifyLogin={handleSpotifyLogin}/>
            <LandingSection/>
        </div>
        <div ref={featureSectionRef} className='home--page--feature--section'>
            <FeatureSection />
        </div>
    </div>
  )
}
