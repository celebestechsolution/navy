import { useQuery } from '@tanstack/react-query';

import type { ApiResponse } from '@/types/api';
import type { PermitApplicant } from '@/types/api/permit';

import { axios } from '@/lib/axios';

async function fetchPermitApplicants() {
    const { data } = await axios.get<ApiResponse<PermitApplicant[]>>('/permit/today');

    return data.data;
}

export const useFetchPermitApplicants = () => {
    return useQuery<PermitApplicant[]>({
        queryKey: ['permit-applicants'],
        queryFn: fetchPermitApplicants,
    });
};
