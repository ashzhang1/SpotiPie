import React from "react"
import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

export default function TopGenresPieChart(props) {

  ChartJS.register(ArcElement, Tooltip, Legend);

  return (
    <div className="top--genres--container">
        <h1 className="top--genres--title">YOUR TOP GENRES</h1>
        <Doughnut data={props.chartData} />
    </div>
  )
}
