import { create } from 'zustand';

type PermitServiceStandardState = {
    search: string;
};

type PermitServiceStandardAction = {
    setSearch: (search: string) => void;
};

type UsePermitServiceStandardFilters = PermitServiceStandardState & PermitServiceStandardAction;

export const usePermitServiceStandardFilters = create<UsePermitServiceStandardFilters>()((set) => ({
    search: '',

    setSearch: (search) => set({ search }),
}));
