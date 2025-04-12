import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/header.css';



const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar px-4">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src={logo} alt="Logo Ornamentales DJM" width="50" height="50" className="me-2 logo-border" />
          <span className="fw-bold fs-4">Ornamentales DJM</span>
        </Link>

        <ul className="navbar-nav d-flex align-items-center">
          <li className="nav-item me-3">
            <Link to="/contacto" className="nav-link text-white">
              Contacto
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Header;
