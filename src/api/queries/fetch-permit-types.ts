import { useQuery } from '@tanstack/react-query';

import type { ApiResponse } from '@/types/api';
import type { PermitType } from '@/types/api/permit';

import { useDebounce } from '@/hooks/use-debounce';
import { axios } from '@/lib/axios';
import { usePermitTypesFilters } from '@/services/states/use-permit-types-filters';

async function fetchPermitTypes(search: string) {
    const { data } = await axios.get<ApiResponse<PermitType[]>>('/permit/types', {
        params: { search },
    });

    return data.data;
}

export const useFetchPermitTypes = () => {
    const search = usePermitTypesFilters((state) => state.search);

    const debounceValue = useDebounce(search);

    return useQuery<PermitType[]>({
        queryKey: ['permit-types', { search: debounceValue }],
        queryFn: () => fetchPermitTypes(debounceValue),
    });
};
