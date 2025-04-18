import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { usePopularMovies } from "@/hooks/usePopularMovies";
import MovieCard from "../MovieCard/MovieCard";
import "./PopularMoviesSlide.style.css";



const PopularMoviesSlide = () => {

  const responsive = {
    superLargeDesktop: {
      // 화면 너비 4000px 이상
      breakpoint: { max: 4000, min: 3000 },
      items: 9
    },
    desktop: {
      // 화면 너비 1024px 이상
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      // 화면 너비 464px 이상
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      // 화면 너비 0px 이상
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const { data: popularMovies, isLoading, isError, error } = usePopularMovies();

  // 안전한 데이터 접근
  const movies = popularMovies?.results || [];

  return (
    <div>
      <h2 className="popular-movies-title">Popular Movies</h2>
      <Carousel
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        centerMode={false}
        swipeable={true}
        className="popular-movies-slide"
        itemClass="movie-slider p-1"
        responsive={responsive}
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Carousel>
    </div>
  );
};

export default PopularMoviesSlide;
