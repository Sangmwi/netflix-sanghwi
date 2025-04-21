import React from "react";
import { useTopRatedMovies } from "@/hooks/useTopRatedMovies";
import MoviesSlide from "@/common/MoviesSlide/MoviesSlide";




const TopRatedMoviesSlide = () => {

  const { data: topRatedMovies, isLoading, isError, error } = useTopRatedMovies();
  // 안전한 데이터 접근
  const movies = topRatedMovies?.results || [];

  return (
    <div>
      <h2 className="top-rated-movies-title slide-title"># Top Rated Movies</h2>
      <MoviesSlide movies={movies} />
    </div>
  );
};

export default TopRatedMoviesSlide;
