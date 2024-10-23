import { keepPreviousData, useQuery } from '@tanstack/react-query';

import type { ApiResponse, Pagination } from '@/types/api';
import type { News } from '@/types/api/news';

import { useDebounce } from '@/hooks/use-debounce';
import { axios } from '@/lib/axios';
import { usePaginatedNewsFilters } from '@/services/states/use-paginated-news-filters';

type Filter = {
    search: string;
    pages: number;
};

async function fetchPaginatedNews(filters: Filter) {
    const { data } = await axios.get<ApiResponse<{ data: News[]; pagination: Pagination }>>('/news/paginated', {
        params: filters,
    });

    return data.data;
}

export const useFetchPaginatedNews = () => {
    const search = usePaginatedNewsFilters((state) => state.search);
    const page = usePaginatedNewsFilters((state) => state.page);

    const debounceValue = useDebounce(search);

    const filters: Filter = {
        pages: page,
        search: debounceValue,
    };

    return useQuery({
        queryKey: ['home-news', filters],
        queryFn: () => fetchPaginatedNews(filters),
        placeholderData: keepPreviousData,
    });
};
