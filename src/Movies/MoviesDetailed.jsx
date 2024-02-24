import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import { Redirect } from 'react-router-dom';
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
                            {/* Rest of the component remains the same */}
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
