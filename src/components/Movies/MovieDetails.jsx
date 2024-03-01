import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [validMovieId, setValidMovieId] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?i=${movieId}&apikey=7055a610`
        );
        console.log("API Response:", response.data); // Log the API response
        if (response.data.Response === "True") {
          setMovie(response.data);
          setValidMovieId(true);
        } else {
          setValidMovieId(false);
          console.log("Invalid Detail");
        }
      } catch (error) {
        console.error("API Error:", error); // Log the API error
        setValidMovieId(false);
      }
    };
  
    fetchMovie();
  }, [movieId]);
  
  return (
    <div>
      {validMovieId ? (
        <section className="fullscreen_bg">
          <div className="container mx-auto p-4">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/3">
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="mx-auto w-full"
                />
              </div>
              <div className="w-full md:w-2/3">
                <div className="p-4">
                  <h1 className="text-2xl font-bold">{movie.Title}</h1>
                  <h3>Director: {movie.Director}</h3>
                  <h3>Language: {movie.Language}</h3>
                  <h3>Genre: {movie.Genre}</h3>
                  <h3>Released: {movie.Released}</h3>
                  <h3>Actors: {movie.Actors}</h3>
                </div>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-xl font-bold">Plot</h3>
              <p>{movie.Plot}</p>
            </div>
          </div>
        </section>
      ) : (
        <div className="container text-center">
          <h1>Invalid Detail.</h1>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
