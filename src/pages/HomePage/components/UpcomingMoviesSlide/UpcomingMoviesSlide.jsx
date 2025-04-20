import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useUpcomingMovies } from "@/hooks/useUpcomingMovies";
import MovieCard from "../MovieCard/MovieCard";
import "./UpcomingMoviesSlide.style.css";
import { responsive } from "../PopularMoviesSlide/PopularMoviesSlide";



const UpcomingMoviesSlide = () => {

  const { data: upcomingMovies, isLoading, isError, error } = useUpcomingMovies();
  // 안전한 데이터 접근
  const movies = upcomingMovies?.results || [];

  return (
    <div>
      <h2 className="upcoming-movies-title slide-title"># Upcoming Movies</h2>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass="p-2"
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

export default UpcomingMoviesSlide;
