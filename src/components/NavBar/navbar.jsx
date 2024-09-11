import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/users" className="navbar-link">List of Users</Link>
        </li>
        <li className="navbar-item">
          <Link to="/make-trip" className="navbar-link">Make a Trip</Link>
        </li>
        <li className="navbar-item">
          <Link to="/drivers-applications" className="navbar-link">Drivers Applications</Link>
        </li>
        <li className="navbar-item">
          <Link to="/assign-driver" className="navbar-link">Assign Driver</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;