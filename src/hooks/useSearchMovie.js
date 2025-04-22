import { useQuery } from "@tanstack/react-query";
import { api } from "@/utils/api";

const fetchSearchMovie = async ({ searchQuery, page }) => {
    return searchQuery
      ? api.get(`/search/movie?query=${searchQuery}&page=${page}`)
      : api.get(`/movie/popular?page=${page}`);
  };

export const useSearchMovie = ({searchQuery, page}) => {
  return useQuery({
    queryKey: ['searchMovie', searchQuery, page],
    queryFn: () => fetchSearchMovie({ searchQuery, page }),
    select: (data) => data?.data || [],
  });
};
