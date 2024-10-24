import type { Pagination } from '@/types/api';

import { TablerIcon } from './tabler-icon';
import { Button } from './ui/button';

interface SimplePaginationProps {
    pagination: Pagination;
    action: {
        previousPage: () => void;
        nextPage: () => void;
    };
}

const SimplePagination = ({ action, pagination }: SimplePaginationProps) => {
    const { nextPage, previousPage } = action;

    return (
        <div className='flex items-center justify-center gap-5'>
            <Button disabled={!pagination.hasPreviousPage} onClick={previousPage} variant='outline' size='icon'>
                <TablerIcon name='IconChevronLeft' />
            </Button>

            <div className='inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors'>
                {`${pagination.currentPage} / ${pagination.totalPages} dari Total ${pagination.totalItems} Data`}
            </div>

            <Button disabled={!pagination.hasNextPage} onClick={nextPage} variant='outline' size='icon'>
                <TablerIcon name='IconChevronRight' />
            </Button>
        </div>
    );
};

export { SimplePagination };
