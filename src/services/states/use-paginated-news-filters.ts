import { create } from 'zustand';

type PaginatedNewsState = {
    search: string;
    page: number;
};

type PaginatedNewsAction = {
    setSearch: (search: string) => void;
    nextPage: () => void;
    previousPage: () => void;
};

type UsePaginatedNewsFilters = PaginatedNewsState & PaginatedNewsAction;

export const usePaginatedNewsFilters = create<UsePaginatedNewsFilters>()((set) => ({
    search: '',
    page: 1,
    setSearch: (search) => set({ search }),
    nextPage: () => set((state) => ({ page: state.page + 1 })),
    previousPage: () => set((state) => ({ page: state.page - 1 })),
}));
