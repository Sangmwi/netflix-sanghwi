import React from "react";
import { usePopularMovies } from "@/hooks/userPopularMovies";
import "./Banner.style.css";
import { Button } from "react-bootstrap";

const Banner = () => {
  const {
    data: popularMovies,
    isLoading,
    isError,
    error,
  } = usePopularMovies(1);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  console.log("qqq", popularMovies);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${popularMovies.results[0].backdrop_path})`,
      }}
    >
      <div className="banner-content">
        <div className="banner-content-left">
          <h1>{popularMovies.results[0].title}</h1>
          <p>{popularMovies.results[0].overview}</p>
        </div>
        <div className="banner-content-right">
          <Button variant="light">
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
