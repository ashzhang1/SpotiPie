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
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Popularity Score',
        data: songPopularities,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ]
  };

  return (
    <div className="top--tracks--container" >
        <h1 className="top--tracks--title">TOP TRACKS</h1>
        <div className="top--tracks--graph">
          <Bar data={chartData} />
        </div>
    </div>
  )
}
