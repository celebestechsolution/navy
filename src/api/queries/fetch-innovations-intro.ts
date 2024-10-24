import { useQuery } from '@tanstack/react-query';

import type { ApiResponse } from '@/types/api';
import type { InnovationIntro } from '@/types/api/innovation';

import { axios } from '@/lib/axios';

async function fetchInnovationsIntro(title: string) {
    const { data } = await axios.get<ApiResponse<InnovationIntro>>(`${title}/intro`);

    return data.data;
}

export const useFetchSiapBoss = () => {
    return useQuery({
        queryKey: ['siap-boss-intro'],
        queryFn: () => fetchInnovationsIntro('siap-boss'),
    });
};
