import React from "react"
import GetStartedButton from "./GetStartedButton"
import Feature from "./Feature";
import data from '../data/features.json';
import miffyImage from '../assets/miffy.jpeg'

export default function FeatureSection() {

  const features = data.features.map(feature => {
    return (
    <Feature {...feature} />
    )
})

  return (
    <div className='feature--page--container'>
      <div className="feature--info--container">
        <h2 className="feature--main--title">Deep dive into your musical story with personalised insights and data-driven discovery.</h2>
        <div className="features">
          {features}
        </div>
        <GetStartedButton />
      </div>
      <img className="feature--page--image" src={miffyImage}/>
    </div>
  )
}
