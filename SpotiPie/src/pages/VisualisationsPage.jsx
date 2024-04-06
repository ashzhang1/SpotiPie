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

  useEffect(() => {
    getTopGenres()
  }, [topArtists])

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

  async function getTopArtists() {
    try {
      const response = await axios.get(spotifyEndpoints.topArtists, {
        headers: {
          Authorization: "Bearer " + token
        }
      });
      return response.data.items
    } catch (error) {
      throw error;
    }
  }

  async function getTopSongs() {
    try {
      const response = await axios.get(spotifyEndpoints.topSongs, {
        headers: {
          Authorization: "Bearer " + token
        }
      });
      return response.data.items.map(dataItem => dataItem.name)
    } catch (error) {
      throw error;
    }
  }

  function getTopGenres() {
    const allGenres = []
    const genreFrequencyMap = {}
    const genreFrequencyList = []
    topArtists.forEach(artist => allGenres.push(...artist.genres))

    allGenres.forEach((element) => {
      if (genreFrequencyMap[element]) {
        genreFrequencyMap[element] += 1
      }
      else {
        genreFrequencyMap[element] = 1
      }
    })


    for (const [genreName, frequency] of Object.entries(genreFrequencyMap)) {
      genreFrequencyList.push([genreName, frequency])
    }

    genreFrequencyList.sort(function(a, b) {
      return b[1] - a[1]; // Compare b to a for descending order
    });

    setTopGenres(genreFrequencyList)

  }

  async function fetchData() {
    try {
      const usernameData = await getUsername()
      const topArtistsData = await getTopArtists()
      const topSongsData = await getTopSongs()

      setUsername(usernameData)
      setTopArtists(topArtistsData)
      setTopSongs(topSongsData)
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
          {token ? <ProceedMessageButton handleClick={async () => await fetchData()} message="Visualise Your Data Now"/> : <ProceedMessageButton message="Login to Visualise Your Data"/>}
        </div>
        <div className='all--cards--container'>
          {cards}
        </div>
    </div>
  )
}