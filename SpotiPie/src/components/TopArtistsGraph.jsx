import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

export default function TopArtistsGraph(props) {

  ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

  let topArtistsApi = props.topArtistData;
  topArtistsApi = topArtistsApi.map(artist => ({ name: artist.name, popularity: artist.popularity}));
  topArtistsApi = topArtistsApi.sort((a, b) => b.popularity - a.popularity);
  const ArtistNames = topArtistsApi.map(artist => artist.name);
  const ArtistPopularities = topArtistsApi.map(artist => artist.popularity);

  const labels = ArtistNames;

  const vibrantColors = [
    '#e6194B', // Red
    '#3cb44b', // Green
    '#ffe119', // Yellow
    '#4363d8', // Blue
    '#f58231', // Orange
    '#911eb4', // Purple
    '#46f0f0', // Cyan
    '#f032e6', // Magenta
    '#bcf60c', // Lime
    '#fabebe', // Pink
    '#008080', // Teal
    '#e6beff', // Lavender
    '#9A6324', // Brown
    '#fffac8', // Beige
    '#800000', // Maroon
    '#aaffc3', // Mint
    '#808000', // Olive
    '#ffd8b1', // Coral
    '#000075', // Navy
    '#808080'  // Grey
  ]; 

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Popularity Score',
        data: ArtistPopularities,
        backgroundColor: vibrantColors,
      }
    ]
  };

  return (
    <div className="top--artists--container" >
        <h1 className="top--artists--title">Your Top Artists</h1>
        <div className="top--artists--graph">
          <Bar data={chartData} />
        </div>
    </div>
  )
}
