import React, { useState, useEffect } from "react";
import graph from "../assets/svg/graph.svg";
import calculator from "../assets/svg/calculator.svg";
import table from "../assets/svg/table.svg";

export default function VisualisationInfoCard(props) {
    const [image, setImage] = useState("");

    useEffect(() => {
        if (props.imgSource === "graph") {
            setImage(graph);
        }
        else if (props.imgSource === "calculator") {
            setImage(calculator);
        }
        else if (props.imgSource === "table") {
            setImage(table);
        }
    }, []);

  return (
    <div className='visualisation--info--card--container'>
        <h3 className="card--info--title">{props.title}</h3>
        <div className="visualisation--description--container">
            <p className="card--text">{props.description}</p>
            <img src={image} className="card--svg"/>
        </div>
    </div>
  )
}
