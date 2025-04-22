import React from "react";
import { useTopRatedMovies } from "@/hooks/useTopRatedMovies";
import MoviesSlide from "@/common/MoviesSlide/MoviesSlide";




const TopRatedMoviesSlide = () => {

  const { data: topRatedMovies, isLoading, isError, error } = useTopRatedMovies();
  // 안전한 데이터 접근
  const movies = topRatedMovies?.results.filter((movie) => movie.poster_path) || [];

  return (
    <MoviesSlide movies={movies} title="# Top Rated Movies" />
  );
};

export default TopRatedMoviesSlide;
