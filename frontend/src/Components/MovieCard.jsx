import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const releaseDate = new Date(movie.release_date);
  const dateFormatOptions = { day: "2-digit", month: "short", year: "numeric" };
  const formattedReleaseDate = releaseDate.toLocaleDateString(
    undefined,
    dateFormatOptions
  );
  return (
    <Link to={`/movies/${movie.id}`}>
    <div className="movie-box">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.original_title}
        />
      </div>
      <div className="movie-info">
        <div className="movie-title">
          <p>{movie.title}</p>
        </div>
        <div className="movie-release-date">
          <p>{formattedReleaseDate}</p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default MovieCard;
