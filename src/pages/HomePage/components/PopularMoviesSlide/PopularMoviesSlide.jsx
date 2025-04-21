import React from "react";
import { usePopularMovies } from "@/hooks/usePopularMovies";
import MoviesSlide from "@/common/MoviesSlide/MoviesSlide";


const PopularMoviesSlide = () => {

  const { data: popularMovies, isLoading, isError, error } = usePopularMovies();
  // 안전한 데이터 접근
  const movies = popularMovies?.results || [];

  return (
    <div>
      <h2 className="popular-movies-title slide-title"># Popular Movies</h2>
      <MoviesSlide movies={movies} />
    </div>
  );
};

export default PopularMoviesSlide;
