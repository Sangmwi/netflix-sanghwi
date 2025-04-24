import { useQuery } from "@tanstack/react-query";
import { api } from "@/utils/api";

const fetchMovieDetail = async (id) => {
    return api.get(`/movie/${id}?append_to_response=credits,videos&language=ko-KR`);
  };
  
  export const useMovieDetail = (id) => {
    return useQuery({
      queryKey: ["movieDetail", id],
      queryFn: () => fetchMovieDetail(id),
      select: (data) => data.data,
      staleTime: 1000 * 60 * 5,
    });
  };
  

