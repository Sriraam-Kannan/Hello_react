import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import axios from 'axios';

class MovieDetail extends Component {
    constructor(props) {
        super();
        this.state = {
            movie: {},
            movieId: props.match.params.movieId,
            validMovieId: false
        };
    }

    componentDidMount() {
        axios.get(`http://www.omdbapi.com/?apikey=7055a610&i=${this.state.movieId}`)
            .then(response => {
                if (response.data.Response === "True") {
                    this.setState({
                        movie: response.data,
                        validMovieId: true
                    });
                } else {
                    this.setState({
                        validMovieId: false
                    });
                }
            })
            .catch(error => {
                console.error(error);
                this.setState({
                    validMovieId: false
                });
            });
    }

    render() {
        const { movie, validMovieId } = this.state;

        return (
            <div>
                {validMovieId ?
                    <section className="fullscreen_bg">
                        <Header />
                        <div className="container mx-auto p-4">
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-1/3">
                                    <img src={movie.Poster} alt={movie.Title} className="mx-auto w-full" />
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
                    :
                    <div className="container text-center">
                        <h1>Oops Invalid Detail.</h1>
                    </div>}
            </div>
        )
    }
}

export default MovieDetail;