import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import MoviesHomepage from "./components/Movies/MoviesList";
import MovieDetails from "./components/Movies/MovieDetails";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Navbar />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MoviesHomepage />} />
             <Route path="/movies/:imdbID" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

const Home = () => <div>My react app</div>;

export default App;
