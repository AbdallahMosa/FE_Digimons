import React from 'react'
import './Header.css'; 

function Header() {
    return (
        <header className="header">
          <div className="header__logo">
            <h1>Digimon App</h1>
          </div>
          <nav className="header__nav">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/MyDigimons">MyDigimons</a></li>
            </ul>
          </nav>
        </header>
      );
    }

export default Header