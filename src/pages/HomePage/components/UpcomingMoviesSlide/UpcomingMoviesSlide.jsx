import React from "react";
import { useUpcomingMovies } from "@/hooks/useUpcomingMovies";
import MoviesSlide from "@/common/MoviesSlide/MoviesSlide";



const UpcomingMoviesSlide = () => {

  const { data: upcomingMovies, isLoading, isError, error } = useUpcomingMovies();
  // 안전한 데이터 접근
  const movies = upcomingMovies?.results.filter((movie) => movie.poster_path) || [];

  return (
    <MoviesSlide movies={movies} title="# Upcoming Movies" />
  );
};

export default UpcomingMoviesSlide;
