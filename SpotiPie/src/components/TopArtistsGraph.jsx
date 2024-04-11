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
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Popularity Score',
        data: ArtistPopularities,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ]
  };

  return (
    <div className="top--artists--container" >
        <h1 className="top--artists--title">TOP ARTISTS</h1>
        <div className="top--artists--graph">
          <Bar data={chartData} />
        </div>
    </div>
  )
}
