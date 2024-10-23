import { useQuery } from '@tanstack/react-query';

import type { ApiResponse } from '@/types/api';
import type { PermitList } from '@/types/api/permit';

import { axios } from '@/lib/axios';

const fetchPermitLists = async () => {
    const { data } = await axios.get<ApiResponse<PermitList[]>>('/permit/process');
    return data.data;
};

export const useFetchPermitLists = () => {
    return useQuery<PermitList[]>({
        queryKey: ['permit-lists'],
        queryFn: fetchPermitLists,
    });
};
