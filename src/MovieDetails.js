import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { API_URL } from "./context";

const MovieDetails = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState("");

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);

        setMovie(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`);
    }, 800);
    return () => clearTimeout(timerOut);
  }, [id]);

  if (isLoading) {
    return (
      <div className="movie-section">
        <div className="loading">Loading...</div>
      </div>
    );
  }
  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt={movie.Title} />
          
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className="card-text">
            <b>Actors: </b>
            {movie.Actors}
          </p>
          {/* <p className="card-text">
            <b>Director: </b>
            {movie.Director}
          </p> */}
          <p className="card-text">
            <b>Release date: </b> {movie.Released}
          </p>
          <p className="card-text">
            <b>Genre: </b>
            {movie.Genre}
          </p>
          <p className="card-text">
            <b>Rating: </b>
            {movie.imdbRating}
          </p>
          <p className="card-text">
            <b>Country: </b>
            {movie.Country}
          </p>
          {/* <p className="card-text">
            <b>BoxOffice: </b>
            {movie.BoxOffice}
          </p> */}

          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
