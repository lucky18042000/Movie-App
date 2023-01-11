import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <h1>IMBG_Clone</h1>
      <nav className={`navMenu ${isMenuOpen ? 'navMenu--open' : ''}`}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/searchmovies" onClick={() => setIsMenuOpen(false)}>Search Movies</Link>
        <Link to="/uploadmovies" onClick={() => setIsMenuOpen(false)}>Upload Movies</Link>
        <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
      </nav>
      <button className="navToggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <FontAwesomeIcon icon={faBars} />
      </button>

    </div>
  );
}

export default Navbar;
