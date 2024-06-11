import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">Tobeto Log Sistemi</div>
        <ul className="navbar-links">
          <li><Link to="/home">Ana Ekran</Link></li>
          <li><Link to="/about">Hakkımda</Link></li> 
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
