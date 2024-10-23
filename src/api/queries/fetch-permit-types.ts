import { useQuery } from '@tanstack/react-query';

import type { ApiResponse } from '@/types/api';
import type { PermitType } from '@/types/api/permit';

import { axios } from '@/lib/axios';

async function fetchPermitTypes() {
    const { data } = await axios.get<ApiResponse<PermitType[]>>('/permit/types');

    return data.data;
}

export const useFetchPermitTypes = () => {
    return useQuery<PermitType[]>({
        queryKey: ['permit-types'],
        queryFn: fetchPermitTypes,
    });
};
