import React from "react";
import { useUpcomingMovies } from "@/hooks/useUpcomingMovies";
import MoviesSlide from "@/common/MoviesSlide/MoviesSlide";



const UpcomingMoviesSlide = () => {

  const { data: upcomingMovies, isLoading, isError, error } = useUpcomingMovies();
  // 안전한 데이터 접근
  const movies = upcomingMovies?.results || [];

  return (
    <div>
      <h2 className="upcoming-movies-title slide-title"># Upcoming Movies</h2>
      <MoviesSlide movies={movies} />
    </div>
  );
};

export default UpcomingMoviesSlide;
