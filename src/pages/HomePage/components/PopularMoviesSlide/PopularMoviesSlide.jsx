import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { usePopularMovies } from "@/hooks/usePopularMovies";
import MovieCard from "../MovieCard/MovieCard";
import "./PopularMoviesSlide.style.css";


const responsive = {
  desktop: {
    // 화면 너비 1024px 이상
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4,
  },
  tablet: {
    // 화면 너비 464px 이상
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    // 화면 너비 0px 이상
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};



const PopularMoviesSlide = () => {

  const { data: popularMovies, isLoading, isError, error } = usePopularMovies();
  // 안전한 데이터 접근
  const movies = popularMovies?.results || [];

  return (
    <div>
      <h2 className="popular-movies-title"># Popular Movies</h2>
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

export default PopularMoviesSlide;
