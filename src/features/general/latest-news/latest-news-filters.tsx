import { usePaginatedNewsFilters } from '@/services/states/use-paginated-news-filters';

import type { Pagination } from '@/types/api';

import { SimplePagination } from '@/components/simple-pagination';
import { TablerIcon } from '@/components/tabler-icon';
import { Input } from '@/components/ui/input';

const LatestNewsFilters = () => {
    const setSearch = usePaginatedNewsFilters((state) => state.setSearch);

    return (
        <div className='relative'>
            <Input
                type='text'
                className='peer ps-9'
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Cari Berita'
            />
            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 text-muted-foreground/80 peer-disabled:opacity-50'>
                <TablerIcon name='IconSearch' />
            </div>
        </div>
    );
};

const LatestNewsPagination = ({ pagination }: { pagination: Pagination }) => {
    const nextPage = usePaginatedNewsFilters((state) => state.nextPage);
    const previousPage = usePaginatedNewsFilters((state) => state.previousPage);

    return <SimplePagination action={{ nextPage, previousPage }} pagination={pagination} />;
};

export { LatestNewsFilters, LatestNewsPagination };
