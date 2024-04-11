import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

export default function TrackAnalysis(props) {

    ChartJS.register(
        RadialLinearScale,
        PointElement,
        LineElement,
        Filler,
        Tooltip,
        Legend
    );

  const chartData = {
    labels: ['Energy', 'Valence', 'Danceability'],
    datasets: [
      {
        label: 'Category Score',
        data: Object.values(props.songFeatures),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="track--analysis--container" >
        <h1 className="track--analysis--title">TRACK ANALYSIS</h1>
        <div className="track--analysis--graph">
            <Radar data={chartData} />
        </div>
    </div>
  )
}
