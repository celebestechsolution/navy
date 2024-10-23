import { useQuery } from '@tanstack/react-query';

import type { ApiResponse } from '@/types/api';
import type { News } from '@/types/api/news';

import { axios } from '@/lib/axios';

async function fetchHomeNews() {
    const { data } = await axios.get<ApiResponse<News[]>>('/news?limit=5');

    return data.data;
}

export const useFetchHomeNews = () => {
    return useQuery({
        queryKey: ['home-news'],
        queryFn: fetchHomeNews,
    });
};
