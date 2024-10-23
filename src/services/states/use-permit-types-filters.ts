import { create } from 'zustand';

type PermitTypeState = {
    search: string;
};

type PermitTypeAction = {
    setSearch: (value: string) => void;
};

type UsePermitTypesFilters = PermitTypeState & PermitTypeAction;

export const usePermitTypesFilters = create<UsePermitTypesFilters>()((set) => ({
    search: '',
    setSearch: (search) => set({ search }),
}));
