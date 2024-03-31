import React from "react"
import NavBar from "./NavBar"
import LandingHero from "./LandingHero"

export default function LandingSection({ backgroundColor }) {

  return (
    <div className='landing--page--container'>
      <LandingHero />
    </div>
  )
}
