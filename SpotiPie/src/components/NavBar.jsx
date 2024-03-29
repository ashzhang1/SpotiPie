import React from "react"

export default function NavBar() {

  return (
    <nav className='landing--page--nav'>
        <h1 className="nav--title">SpotiPie</h1>
        <ul className="nav-elements-container">
            <li>Features</li>
            <li>Get Started</li>
            <li>GitHub</li>
        </ul>
        <p className="navbar--message">Coded with 💖 by Ashley Zhang</p>
    </nav>
  )
}
