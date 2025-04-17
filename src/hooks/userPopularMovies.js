import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";




export const usePopularMovies = (page) => {
    return useQuery({
        queryKey: ['movie=popular', page],
        queryFn: () => api.get('/movie/popular', { params: { page } }),
        select: (data) => data.data,
    });
};

