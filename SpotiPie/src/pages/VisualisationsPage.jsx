import { useState, useEffect } from 'react';
import hash from '../Hash';
import axios from 'axios';
import NavBar from '../components/NavBar';
import ProceedMessageButton from '../components/ProceedMessageButton';
import data from '../data/visualisationInfoCards.json';
import VisualisationInfoCard from '../components/VisualisationInfoCard';


export default function VisualisationsPage() {
  const [token, setToken] = useState("")

  useEffect(() => {
    var mToken = hash.access_token
    if (mToken) {
      setToken(mToken)
    }
  })

  const cards = data.cards.map(card => {
    return (
    <VisualisationInfoCard {...card}/>
    )
  })

  return (
    <div className='visualisations--page--container'>
        <NavBar />
        <div className='visualisations--page--title--container'>
          <h1 className='visualisations--page--title'>Interpreting Your Spotify Data</h1>
          {token ? <ProceedMessageButton message="Visualise Your Data Now"/> : <ProceedMessageButton message="Login to Visualise Your Data"/>}
        </div>
        <div className='all--cards--container'>
          {cards}
        </div>
    </div>
  )
}