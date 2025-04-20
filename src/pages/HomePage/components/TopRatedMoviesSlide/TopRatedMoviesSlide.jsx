import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTopRatedMovies } from "@/hooks/useTopRatedMovies";
import MovieCard from "../MovieCard/MovieCard";
import "./TopRatedMoviesSlide.style.css";
import { responsive } from "../PopularMoviesSlide/PopularMoviesSlide";



const TopRatedMoviesSlide = () => {

  const { data: topRatedMovies, isLoading, isError, error } = useTopRatedMovies();
  // 안전한 데이터 접근
  const movies = topRatedMovies?.results || [];

  return (
    <div>
      <h2 className="top-rated-movies-title slide-title"># Top Rated Movies</h2>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass="m-2"
        containerClass="carousel-container"
        responsive={responsive}
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Carousel>
    </div>
  );
};

export default TopRatedMoviesSlide;
