import React from "react"

export default function NavBar({ onFeaturesClick}) {

  function openGithub() {
    window.open("https://github.com/ashzhang1?tab=repositories", "_blank", "noreferrer");
  }

  const routeToPage = () => {
    window.location.href = '/test'
  }

  return (
    <nav className='landing--page--nav'>
        <h1 className="nav--title">SpotiPie</h1>
        <div className="nav-elements-container">
            <button onClick={onFeaturesClick}>Features</button>
            <button onClick={routeToPage}>Visualisations</button>
            <button onClick={openGithub}>GitHub</button>
        </div>
        <p className="navbar--message">Coded with 💖 by Ashley Zhang</p>
    </nav>
  )
}
