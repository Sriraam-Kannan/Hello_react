import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import navbar from './navbar/navbar';
import MoviesHomepage from './Movies/MoviesHomepage';
import MoviesDetailed from './Movies/MoviesDetailed';

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>My React app</h1>
      <h2>Using Vite + React.</h2>

      <Router>
        <navbar />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
        <Route path="/" exact element={<Home />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Router>
    </>
  );
}
const Home = ()=> <div>My react app</div>

export default App
