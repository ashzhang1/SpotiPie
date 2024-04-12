import React from "react";

export default function RecommendedTrack(props) {
  return (
    <li className="recommended--track--container">
        <img src={props.album.images[0].url} 
            className="album--cover"
            alt={`Cover of the album featuring the track ${props.name} by ${props.artists[0].name}`} />
        <div className="track--info">
          <h4 className="track--name">{props.name}</h4>
          <p className="track--artist">{props.artists[0].name}</p>
        </div>
    </li>
  )
}