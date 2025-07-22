import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-logo">
          <img src="./img/logo2.png" alt="Uniformes Único" />
        </Link>

        <ul className="navbar-links">
          <li>
            <Link to="/catalogo">Catálogo</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
