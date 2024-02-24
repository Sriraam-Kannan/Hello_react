import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link> //to main page, hello react
        </li>
        <li>
          <Link to="/MoviesHomepage">Movies</Link> //to movies list page
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
