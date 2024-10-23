export type ApiResponse<TData> = {
    message: string;
    data: TData;
};

export type Pagination = {
    currentPage: string | number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    totalItems: number;
};
