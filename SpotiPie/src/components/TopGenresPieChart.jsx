import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

export default function TopGenresPieChart(props) {

  ChartJS.register(ArcElement, Tooltip, Legend);

  const chartData = {
    datasets: [{
      label: 'Popularity',
      data: props.genreFrequencies,
      backgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
        'rgba(75, 192, 192)',
        'rgba(153, 102, 255)',
        'rgba(255, 159, 64)',
        'rgba(255, 205, 86)',
        'rgba(75, 192, 192)',
        'rgba(153, 102, 255)',
        'rgba(255, 159, 64)'
      ],
      borderColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
        'rgba(75, 192, 192)',
        'rgba(153, 102, 255)',
        'rgba(255, 159, 64)',
        'rgba(255, 205, 86)',
        'rgba(75, 192, 192)',
        'rgba(153, 102, 255)',
        'rgba(255, 159, 64)'
      ],
      borderWidth: 1      
      }],
      labels: props.genreNames
  };

  const legendOptions = {
    labels: {
      color: 'white' // Change the color of legend text to white
    }
  };

  const options = {
    plugins: {
      legend: legendOptions
    }
  };

  return (
    <div className="top--genres--container">
      <h1 className="top--genres--title">Your Top Genres</h1>
        <div className="pie--chart--container">
          <Doughnut data={chartData} options={options}/>
        </div>
    </div>
  )
}
