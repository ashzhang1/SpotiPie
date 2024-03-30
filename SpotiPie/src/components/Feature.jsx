import React from "react"

export default function Feature(props) {

  return (
    <div className="feature--container">
        <h5 className="feature--title">{props.name}</h5>
        <p className="feature-description">{props.description}</p>
    </div>
  )
}
