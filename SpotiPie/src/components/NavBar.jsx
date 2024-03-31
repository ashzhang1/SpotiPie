import React from "react"

export default function NavBar({ onFeaturesClick }) {

  return (
    <nav className='landing--page--nav'>
        <h1 className="nav--title">SpotiPie</h1>
        <div className="nav-elements-container">
            <button onClick={onFeaturesClick}>Features</button>
            <button>Get Started</button>
            <button>GitHub</button>
        </div>
        <p className="navbar--message">Coded with 💖 by Ashley Zhang</p>
    </nav>
  )
}
