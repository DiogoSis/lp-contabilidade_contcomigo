
import React from 'react';
import "./style.css"

const Header = () => {
  return (
    <header>
      <nav>
        <div className="container">
          <h1>ContComigo</h1>
          <ul>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
