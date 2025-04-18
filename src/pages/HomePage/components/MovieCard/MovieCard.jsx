import React from "react";
import { CircularProgress } from "@mui/material";
import { Badge } from "@mui/material";
import "./MovieCard.style.css";


const MovieCard = ({ movie }) => {
  if (!movie) {
    return <CircularProgress size={20} />;
  }

  return (
    <div
      className="movie-card"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path})`,
      }}
    >
      <div className="movie-card-content">
        <h3>{movie.title}</h3>
        {movie.genre_ids.map((id) => (
          <Badge bg="danger" key={id}>{id}</Badge>
        ))}
        <div>
          <div>{movie.vote_average}</div>
          <div>{movie.popularity}</div>
          <div>{movie.release_date}</div>
          <div>{movie.adult ? "over 18" : "under 18"}</div>
        </div>
      </div>


    </div>
  );
};

export default MovieCard;
