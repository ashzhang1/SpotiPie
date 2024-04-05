import { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import ProceedMessageButton from '../components/ProceedMessageButton';
import data from '../data/visualisationInfoCards.json';
import VisualisationInfoCard from '../components/VisualisationInfoCard';
import hash from '../utils/Hash';
import { spotifyEndpoints } from '../utils/apiEndpoints'


export default function VisualisationsPage() {
  const [token, setToken] = useState("")

  const [username, setUsername] = useState("")
  const [topArtists, setTopArtists] = useState([])
  const [topGenres, setTopGenres] = useState([])
  const [topSongs, setTopSongs] = useState([])

  const [meanSongEnergy, setMeanSongEnergy] = useState(0)
  const [meanSongTempo, setMeanSongTempo] = useState(0)
  const [meanSongValence, setMeanSongValence] = useState(0)
  const [meanSongDanceability, setMeanSongDanceability] = useState(0)

  const [recommendedSongs, setRecommendedSongs] = useState([])
  const [recommendedAtists, setRecommendedAtists] = useState([])

  useEffect(() => {
    var mToken = hash.access_token
    if (mToken) {
      setToken(mToken)
    }
  })

  async function getUsername() {
    try {
      const response = await axios.get(spotifyEndpoints.userProfile, {
        headers: {
          Authorization: "Bearer " + token
        }
      });
      return response.data.display_name
    } catch (error) {
      throw error;
    }
  }

  async function fetchData() {
    try {
      const usernameData = await getUsername()
      const topArtistsData = await getTopArtists()
      const topSongsData = await getTopSongs()


      setUsername(usernameData)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

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
          {token ? <ProceedMessageButton handleClick={fetchData} message="Visualise Your Data Now"/> : <ProceedMessageButton message="Login to Visualise Your Data"/>}
        </div>
        <div className='all--cards--container'>
          {cards}
        </div>
    </div>
  )
}