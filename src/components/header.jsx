import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand text-white text-2xl font-bold">
            Logo from header
          </Link>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right flex space-x-4">
            <li>
              <Link to="/" className="text-white">
                Home from header
              </Link>
            </li>
            <li>
              <Link to="/movies" className="text-white">
                Movies List from header
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
