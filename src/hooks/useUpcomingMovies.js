import { useQuery } from "@tanstack/react-query";
import { api } from "@/utils/api";




export const useUpcomingMovies = (page) => {
    return useQuery({
        queryKey: ['movie-upcoming', page],
        queryFn: () => api.get('/movie/upcoming?language=ko-KR', { params: { page } }),
        select: (data) => data.data,
    });
};



