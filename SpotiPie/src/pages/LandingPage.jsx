import React from "react"
import NavBar from "../components/NavBar"
import LandingHero from "../components/LandingHero"

export default function LandingPage() {

  return (
    <div className='landing--page--container'>
      <NavBar />
      <LandingHero />
    </div>
  )
}
