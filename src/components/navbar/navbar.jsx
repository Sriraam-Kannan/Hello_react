import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/MoviesHomepage">Movies</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
