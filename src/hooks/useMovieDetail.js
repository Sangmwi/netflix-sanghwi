import { useQuery } from "@tanstack/react-query";
import { api } from "@/utils/api";

const fetchMovieDetail = async (id) => {
    const [detailRes] = await Promise.all([
      api.get(`/movie/${id}?append_to_response=credits,videos`),
    ]);
  
    return {
      ...detailRes.data,
    };
  };
  
  export const useMovieDetail = (id) => {
    return useQuery({
      queryKey: ["movieDetail", id],
      queryFn: () => fetchMovieDetail(id),
      select: (data) => data,
      staleTime: 1000 * 60 * 5,
    });
  };
  

