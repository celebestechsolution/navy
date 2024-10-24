import { keepPreviousData, useQuery } from '@tanstack/react-query';

import type { ApiResponse } from '@/types/api';
import type { PermitServiceStandard } from '@/types/api/permit';

import { useDebounce } from '@/hooks/use-debounce';
import { axios } from '@/lib/axios';
import { usePermitServiceStandardFilters } from '@/services/states/use-permit-service-standards-filters';

async function fetchPermitServiceStandards(search: string) {
    const { data } = await axios.get<ApiResponse<PermitServiceStandard[]>>('/permit/service-standard', {
        params: { search },
    });

    return data.data;
}

export const useFetchPermitServiceStandards = () => {
    const search = usePermitServiceStandardFilters((state) => state.search);

    const debounceValue = useDebounce(search);

    return useQuery({
        queryKey: ['permit-service-standards', { search: debounceValue }],
        queryFn: () => fetchPermitServiceStandards(debounceValue),
        placeholderData: keepPreviousData,
    });
};
