import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from "./responsive";
import MovieCard from "@/common/MovieCard/MovieCard";
import "./MoviesSlide.style.css";

const MoviesSlide = ({ movies }) => {
  return (
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
  );
};

export default MoviesSlide;
