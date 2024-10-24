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

export const useFetchPaksi = () => {
    return useQuery({
        queryKey: ['paksi-intro'],
        queryFn: () => fetchInnovationsIntro('paksi'),
    });
};

export const useFetchRajin = () => {
    return useQuery({
        queryKey: ['rajin-intro'],
        queryFn: () => fetchInnovationsIntro('rajin'),
    });
};

export const useFetchJabatErat = () => {
    return useQuery({
        queryKey: ['jabat-erat-intro'],
        queryFn: () => fetchInnovationsIntro('jabat-erat'),
    });
};

export const useFetchKongsi = () => {
    return useQuery({
        queryKey: ['kongsi-intro'],
        queryFn: () => fetchInnovationsIntro('kongsi'),
    });
};
