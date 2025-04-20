import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { usePopularMovies } from "@/hooks/usePopularMovies";
import MovieCard from "../MovieCard/MovieCard";
import "./PopularMoviesSlide.style.css";


export const responsive = {
  // 화면 너비 1600px 이상
  superLargeDesktop: {
    breakpoint: { max: 2000, min: 1600 },
    items: 5,
    slidesToSlide: 5,
  },
  largeDesktop: {
    breakpoint: { max: 1600, min: 1200 },
    items: 4,
    slidesToSlide: 4,
  },
  desktop: {
    // 화면 너비 900~1600px
    breakpoint: { max: 1200, min: 800 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    // 화면 너비 450~900px
    breakpoint: { max: 800, min: 400 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    // 화면 너비 0~450px
    breakpoint: { max: 400, min: 0 },
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
      <h2 className="popular-movies-title slide-title"># Popular Movies</h2>
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

export default PopularMoviesSlide;
