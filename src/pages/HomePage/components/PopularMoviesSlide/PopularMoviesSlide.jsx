import React from "react";
import { usePopularMovies } from "@/hooks/usePopularMovies";
import MoviesSlide from "@/common/MoviesSlide/MoviesSlide";


const PopularMoviesSlide = () => {

  const { data: popularMovies, isLoading, isError, error } = usePopularMovies();
  // 안전한 데이터 접근
  const movies = popularMovies?.results.filter((movie) => movie.poster_path) || [];

  return (
    <MoviesSlide movies={movies} title="# Popular Movies" />
  );
};

export default PopularMoviesSlide;
