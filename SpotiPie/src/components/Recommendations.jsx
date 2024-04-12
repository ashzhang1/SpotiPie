import React from "react";
import RecommendedTrack from "./RecommendedTrack";

export default function Recommendations(props) {
    
    const recommendationList = props.data.map((song, index) => {
        return (
        <RecommendedTrack key={index} {...song} />
        )
    });

  return (
    <div className="recommendations--container" >
        <h1 className="recommendations--title">Our Recommendations</h1>
        <ul className="recommendations--list">
            {recommendationList}
        </ul>
    </div>
  )
}
