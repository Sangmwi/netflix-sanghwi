import React from "react";
import { CircularProgress } from "@mui/material";
import GenreBadge from "@/common/GenreBadge/GenreBadge";
import "./MovieCard.style.css";
import { useMovieGenre } from "@/hooks/useMovieGenre";
import Rating from '@mui/material/Rating';

const MovieCard = ({ movie }) => {

  if (!movie) {
    return <CircularProgress size={60} />;
  }

  const { data: movieGenre } = useMovieGenre();

  console.log(movieGenre);

  const showGenre = (genreIds) => {
    if (!genreIds) return [];
    return genreIds.map((id) => movieGenre?.find((genre) => genre.id === id)?.name);
  };

  const transformVoteToStar = (voteAverageScore) => {
    if (!voteAverageScore) return "";
    return <Rating name="read-only" size="small" value={voteAverageScore/2} precision={0.5} readOnly />;
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
        <div className="movie-card-genre-container">
          {showGenre(movie.genre_ids)?.map((genre, id) => (
            <GenreBadge key={id} genre={genre} />
          ))}
        </div>
        <div className="movie-card-vote-average-container">
          {transformVoteToStar(movie.vote_average)}
        </div>





        {/*
          <Chip
            className="movie-card-popularity"
            label={movie.popularity}
            variant="outlined"
            size="small"
          />
          <Chip
            className="movie-card-release-date"
            label={movie.release_date}
            variant="outlined"
            size="small"
          />
          <Chip
            className="movie-card-adult"
            label={movie.adult ? "18+" : "ALL"}
            variant="filled"
            size="small"
            color={movie.adult ? "error" : "success"}
          />
        </div> */}
      </div>
    </div>
  );
};

export default MovieCard;
