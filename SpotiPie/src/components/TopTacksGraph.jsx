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

export default function TopTacksGraph(props) {

  ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

  let topSongsApi = props.topTracks;
  topSongsApi = topSongsApi.map(song => ({ name: song.name, popularity: song.popularity}));
  topSongsApi = topSongsApi.sort((a, b) => b.popularity - a.popularity);
  const songNames = topSongsApi.map(song => song.name);
  const songPopularities = topSongsApi.map(song => song.popularity);

  const labels = songNames;


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
        data: songPopularities,
        backgroundColor: vibrantColors,
      }
    ]
  };

  return (
    <div className="top--tracks--container" >
        <h1 className="top--tracks--title">Your Top Songs</h1>
        <div className="top--tracks--graph">
          <Bar data={chartData} />
        </div>
    </div>
  )
}
