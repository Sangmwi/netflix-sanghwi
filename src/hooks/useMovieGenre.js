import { useQuery } from "@tanstack/react-query";
import { api } from "@/utils/api";

const fetchMovieGenre = async () => {
    return api.get("/genre/movie/list");
}

export const useMovieGenre = () => {
  return useQuery({
    queryKey: ["movieGenre"],
    queryFn: fetchMovieGenre,
    select: (data) => data.data.genres,
    staleTime: 1000 * 60 * 60 * 6, // 6 시간
  });
};


