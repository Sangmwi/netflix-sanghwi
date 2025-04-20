import { useQuery } from "@tanstack/react-query";
import { api } from "@/utils/api";




export const useTopRatedMovies = (page) => {
    return useQuery({
        queryKey: ['movie-top_rated', page],
        queryFn: () => api.get('/movie/top_rated', { params: { page } }),
        select: (data) => data.data,
    }); 
};



