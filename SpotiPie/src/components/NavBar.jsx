import React from "react";
import { useLocation } from 'react-router-dom';

export default function NavBar({ onFeaturesClick}) {
  const location = useLocation();

  const routeToPage = button => {
    if (button === 'Visualisations') {
      window.location.href = '/test';
    }
    else if (button === 'GitHub') {
      window.open("https://github.com/ashzhang1?tab=repositories", "_blank", "noreferrer");
    }
    else if (button === 'Features') {
      window.location.href = '/';
    }
  }

  return (
    <nav className='nav--container'>
        <button onClick={() =>routeToPage('Features')} className="nav--title">SpotiPie</button>
        <div className="nav-elements-container">
            <button onClick={location.pathname === '/test' ? () =>routeToPage('Features') : onFeaturesClick}>Features</button>
            <button onClick={() =>routeToPage('Visualisations')}>Visualisations</button>
            <button onClick={() =>routeToPage('GitHub')}>GitHub</button>
        </div>
        <p className="navbar--message">Coded with 💖 by Ashley Zhang</p>
    </nav>
  )
}
