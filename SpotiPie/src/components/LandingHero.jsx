import React from "react";
import GetStartedButton from "./GetStartedButton";

export default function LandingHero() {

  return (
    <div className="hero--container" >
        <h2 className="hero--title">Discover your Spotify Story</h2>
        <span className="hero--subtitle">Chart your musical voyage with SpotiPie.</span>
        <GetStartedButton />
    </div>
  )
}
