import React from "react";
import { usePopularMovies } from "@/hooks/usePopularMovies";
import "./Banner.style.css";
import { Button } from "react-bootstrap";
import Skeleton from "@mui/material/Skeleton";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const navigate = useNavigate();
  const { data: popularMovies, isLoading, isError, error } = usePopularMovies();

    console.log("qqq", popularMovies);


    const firstMovie = popularMovies?.results.filter((movie) => movie.backdrop_path)[0];

  return (
    <div
      className="banner"
      style={{
        backgroundImage: isLoading
          ? "none"
          : `url(https://image.tmdb.org/t/p/original/${firstMovie?.backdrop_path})`,
      }}
    >
      <div className="banner-content">
        {isLoading ? (
          <CircularProgress className="banner-loading-spinner" size={48} sx={{ color: "#e50914" }} />
        ) : null}
        <div className="banner-content-left">
          <h1>{isLoading ? <Skeleton variant="rectangular" width="100%" height={50} animation="wave" /> : popularMovies.results[0].title}</h1>
          <p>{isLoading ? <Skeleton variant="rectangular" width="100%" height={200} animation="wave" /> : popularMovies.results[0].overview}</p>
        </div>
        <div className="banner-content-right">
          <Button className="play-button" variant="light" onClick={() => navigate(`/movies/${firstMovie?.id}`)}>
            <span className="play-icon">▶</span>
            <span className="d-none d-md-inline"> 재생</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
