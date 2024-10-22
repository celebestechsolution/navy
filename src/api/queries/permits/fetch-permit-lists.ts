import { axios } from '@/lib/axios';
import { ApiResponse } from '@/types/api';
import { PermitList } from '@/types/api/permit';
import { useQuery } from '@tanstack/react-query';

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
