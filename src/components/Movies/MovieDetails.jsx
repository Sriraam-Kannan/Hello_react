import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import axios from "axios";
import { resolveEnvPrefix } from "vite";

// class MovieDetails extends Component {
//     constructor(props) {
//         super();
//         this.state = {
//             movie: {},
//             movieId: "tt1853728",
//             validMovieId: false
//         };
//     }

const MovieDetails = () => {
  const { movieID } = useParams();
  const [movie, setMovie] = useState([]);
  const [validMovieId, setValidMovieId] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?i=${movieID}&apikey=b468777`
        );
        if (response.data.response === "True") {
          setMovie(response.data);
          setValidMovieId(true);
        } else {
          setValidMovieId(false);
          console.log("Invalid Detail");
        }
      } catch (error) {
        console.error(error);
        setValidMovieId(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  // componentDidMount() {
  //     //console.log(useParams());
  //     axios.get(`http://www.omdbapi.com/?apikey=7055a610&i=${this.state.movieId}`)
  //         .then(response => {
  //             if (response.data.Response === "True") {
  //                 this.setState({
  //                     movie: response.data,
  //                     validMovieId: true
  //                 });
  //             } else {
  //                 this.setState({
  //                     validMovieId: false
  //                 });
  //                 console.log()

  //             }
  //         })
  //         .catch(error => {
  //             console.error(error);
  //             this.setState({
  //                 validMovieId: false
  //             });
  //         });
  // }

  return (
    <div>
      {validMovieId ? (
        <section className="fullscreen_bg">
          <Header />
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
              <h3 className="text-xl font-bold">Overview</h3>
              <p>{movie.Plot}</p>
            </div>
          </div>
          <Footer />
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
