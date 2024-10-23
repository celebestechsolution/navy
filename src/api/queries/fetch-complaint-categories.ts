import { useQuery } from '@tanstack/react-query';

import type { ApiResponse } from '@/types/api';
import type { ComplaintCategory } from '@/types/api/complaint';

import { axios } from '@/lib/axios';

async function fetchComplaintCategories() {
    const { data } = await axios.get<ApiResponse<ComplaintCategory[]>>('/report/categories');

    return data.data;
}

export const useFetchComplaintCategories = () => {
    return useQuery({
        queryKey: ['complaint-categories'],
        queryFn: fetchComplaintCategories,
    });
};
