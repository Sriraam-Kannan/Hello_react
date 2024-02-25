import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "./search/index";
import axios from "axios";

class MoviesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      search: "",
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.searchAction = this.searchAction.bind(this);
  }

  updateSearch(newVal) {
    this.setState({
      search: newVal.target.value,
    });
  }

  getMovie() {
    axios
      .get(`http://www.omdbapi.com/?apikey=7055a610&s=${this.state.search}&type=movie`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          movies: response.data.Search || [],
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  searchAction() {
    return this.state.search
      ? this.getMovie()
      : alert("Please enter a movie name");
  }

  render() {
    return (
      <div>
        <header />
        <section className="container">
          <Search
            search={this.state.search}
            detectChange={this.updateSearch}
            searchAction={this.searchAction}
          />
          <div className="row movieList display-flex">
            {this.state.movies.map((movie) => (
              <div className="col-xs-6 col-md-4 movieBlock" key={movie.imdbID}>
                <div className="card">
                  <img
                    className="card-img-top"
                    src={movie.Poster}
                    alt={movie.Title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{movie.Title}</h5>
                    <p className="card-text">{movie.Plot}</p>
                    <Link
                      to={`/movie/${movie.imdbID}`}
                      className="btn btn-primary"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default MoviesList;
