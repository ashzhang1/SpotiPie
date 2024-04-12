import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

export default function TopGenresPieChart(props) {

  ChartJS.register(ArcElement, Tooltip, Legend);

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
    datasets: [{
      label: 'Popularity',
      data: props.genreFrequencies,
      backgroundColor: vibrantColors,
      borderColor: vibrantColors,
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