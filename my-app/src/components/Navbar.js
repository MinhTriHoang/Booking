import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="nav-link">Home</Link>
    <Link to="/booking-form" className="nav-link">Book a Hotel</Link>
    <Link to="/past-bookings" className="nav-link">Past Bookings</Link>
  </nav>
);

export default Navbar;
