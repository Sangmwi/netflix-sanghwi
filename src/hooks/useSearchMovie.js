import { useQuery } from "@tanstack/react-query";
import { api } from "@/utils/api";

// fetch 함수에서 genre, sort까지 처리
const fetchSearchMovie = async ({ searchQuery, page, selectedGenre, sort }) => {
  const params = new URLSearchParams();

  params.append("page", page);
  params.append("include_adult", "false");
  params.append("language", "ko-KR");

  if (searchQuery) {
    params.append("query", searchQuery);
  }
  if (selectedGenre && selectedGenre !== "ALL") {
    params.append("with_genres", selectedGenre);
  }
  if (sort) {
    params.append("sort_by", sort);
  }

  const endpoint = searchQuery
    ? `/search/movie?${params.toString()}`
    : `/discover/movie?${params.toString()}`;

  return api.get(endpoint);
};

// 커스텀 훅
export const useSearchMovie = ({ searchQuery, page, selectedGenre, sort }) => {
  return useQuery({
    queryKey: ["searchMovie", searchQuery, page, selectedGenre, sort],
    queryFn: () =>
      fetchSearchMovie({ searchQuery, page, selectedGenre, sort }),
    select: (data) => data?.data || [],
    staleTime: 1000 * 60 * 5,
    keepPreviousData: true,
  });
};
