import { create } from 'zustand';

type PermitTypeState = {
    search: string;
};

type PermitTypeAction = {
    setSearch: (value: string) => void;
};

type UsePermitTypesSearch = PermitTypeState & PermitTypeAction;

export const usePermitTypesSearch = create<UsePermitTypesSearch>()((set) => ({
    search: '',
    setSearch: (search) => set({ search }),
}));
