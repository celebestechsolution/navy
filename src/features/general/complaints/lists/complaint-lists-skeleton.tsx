import { cn } from '@/lib/utils';

import { Skeleton } from '@/components/ui/skeleton';

const ComplaintListsSkeleton = () => {
    return Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className={cn('flex items-center gap-4', index !== 0 && 'pt-3')}>
            <Skeleton className='aspect-square size-[5.438rem] rounded-2xl border' />
            <div className='flex w-full flex-col'>
                <div className='flex items-center justify-between text-sm text-muted-foreground'>
                    <Skeleton className='h-3 w-20' />
                    <Skeleton className='h-3 w-12' />
                </div>
                <div className='my-4'>
                    <Skeleton className='h-5 w-40' />
                </div>
                <div className='flex items-center justify-between text-sm text-muted-foreground'>
                    <Skeleton className='h-3 w-20' />
                    <Skeleton className='h-3 w-12' />
                </div>
            </div>
        </div>
    ));
};

export { ComplaintListsSkeleton };
