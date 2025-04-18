import React from "react";
import { CircularProgress } from "@mui/material";

const MovieCard = ({ movie }) => {
  if (!movie) {
    return <CircularProgress size={20} />;
  }

  return (
    <div
      key={movie.id}
      className="movie-card"
      style={{
        width: "100%",
        height: "330px",
        backgroundImage: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "10px",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
    ></div>
  );
};

export default MovieCard;
