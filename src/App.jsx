import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import MoviesHomepage from './components/Movies/MoviesHomepage';
import MoviesDetailed from './components/Movies/MoviesDetailed';

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
      <Navbar />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>

      <Router>
        <Routes>
        
        <Route path="/" exact element={<Home />} />
        <Route path="/movies" element={<MoviesHomepage />} />
        </Routes>
      </Router>
    </>
  );
}
const Home = ()=> <div>My react app</div>

export default App
