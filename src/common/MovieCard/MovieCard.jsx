import React from "react";
import { CircularProgress } from "@mui/material";
import { Chip } from "@mui/material";
import "./MovieCard.style.css";
import { useMovieGenre } from "@/hooks/useMovieGenre";

const MovieCard = ({ movie }) => {

  if (!movie) {
    return <CircularProgress size={60} />;
  }


  const { data: movieGenre } = useMovieGenre();
  console.log("movieGenre", movieGenre);

  const showGenre = (genreIds) => {
    if (!genreIds) return [];
    return genreIds.map((id) => movieGenre?.find((genre) => genre.id === id)?.name);
  };



  return (
    <div
      className="movie-card"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path})`,
      }}
    >
      <div className="movie-card-overlay">
        <h3 className="movie-card-title">{movie.title}</h3>
        {showGenre(movie.genre_ids)?.map((genre, id) => (
          <Chip
            className="movie-card-genre"
            label={genre}
            size="small"
            color="warning"
            variant="outlined"
            key={id}
          />
        ))}
        {/* <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
          <Chip
            className="movie-card-vote-average"
            label={movie.vote_average}
            variant="outlined"
          />
          <Chip
            className="movie-card-popularity"
            label={movie.popularity}
            variant="outlined"
          />
          <Chip
            className="movie-card-release-date"
            label={movie.release_date}
            variant="outlined"
          />
          <Chip
            className="movie-card-adult"
            label={movie.adult ? "over 18" : "under 18"}
            variant="outlined"
          />
        </div> */}
      </div>
    </div>
  );
};

export default MovieCard;
