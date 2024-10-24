import { useQuery } from '@tanstack/react-query';

import type { ApiResponse } from '@/types/api';
import type { News } from '@/types/api/news';

import { axios } from '@/lib/axios';

async function fetchSingleNewsBySlug(slug: string) {
    const { data } = await axios.get<ApiResponse<News>>(`/news/s/${slug}`);

    return data.data;
}

export const useFetchSingleNewsBySlug = (slug: string) => {
    return useQuery({
        queryKey: ['news', 'single', { slug }],
        queryFn: () => fetchSingleNewsBySlug(slug),
    });
};
