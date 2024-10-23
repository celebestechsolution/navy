import { useQuery } from '@tanstack/react-query';

import type { ApiResponse, Pagination } from '@/types/api';
import type { News } from '@/types/api/news';

import { axios } from '@/lib/axios';

async function fetchPaginatedNews() {
    const { data } = await axios.get<ApiResponse<{ data: News[]; pagination: Pagination }>>('/news/paginated');

    return data.data;
}

export const useFetchPaginatedNews = () => {
    return useQuery({
        queryKey: ['home-news'],
        queryFn: fetchPaginatedNews,
    });
};
