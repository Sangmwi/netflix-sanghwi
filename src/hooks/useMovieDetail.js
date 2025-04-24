import { useQuery } from "@tanstack/react-query";
import { api } from "@/utils/api";

const fetchMovieDetail = async (id) => {
    return api.get(`/movie/${id}?append_to_response=credits&language=ko-KR`);
  };
  
  export const useMovieDetail = (id) => {
    return useQuery({
      queryKey: ["movieDetail", id],
      queryFn: () => fetchMovieDetail(id),
      select: (data) => data.data,
      staleTime: 1000 * 60 * 5,
    });
  };



const fetchMovieReviews = async (id) => {
  return api.get(`/movie/${id}/reviews?language=en-US`);
};

export const useMovieReviews = (id) => {
  return useQuery({
    queryKey: ["movieReviews", id],
    queryFn: () => fetchMovieReviews(id),
    select: (data) => data.data,
    staleTime: 1000 * 60 * 5,
  });
};


const fetchMovieTrailer = async (id) => {
  return api.get(`/movie/${id}/videos?language=en-US`);
};

export const useMovieTrailer = (id) => {
  return useQuery({
    queryKey: ["movieTrailer", id],
    queryFn: () => fetchMovieTrailer(id),
    select: (data) => data.data,
    staleTime: 1000 * 60 * 5,
  });
};



