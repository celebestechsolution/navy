import { useQuery } from '@tanstack/react-query';

import type { ApiResponse } from '@/types/api';
import type { ComplaintList } from '@/types/api/complaint';

import { axios } from '@/lib/axios';

async function fetchComplaintLists() {
    const { data } = await axios.get<ApiResponse<ComplaintList[]>>('/report');

    return data.data;
}

export const useFetchComplaintLists = () => {
    return useQuery({
        queryKey: ['complaint-lists'],
        queryFn: fetchComplaintLists,
    });
};
