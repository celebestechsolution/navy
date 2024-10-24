import { cn } from '@/lib/utils';

import { Skeleton } from '@/components/ui/skeleton';

const DetailNewsSkeleton = () => {
    return (
        <div className='space-y-4'>
            <div className='flex flex-col space-y-2'>
                <Skeleton className='h-44 w-full rounded-xl' />
                <Skeleton className='h-3 w-16' />
                <div className='w-full space-y-1'>
                    <Skeleton className='h-3 w-full' />
                    <Skeleton className='h-3 w-1/2' />
                </div>
            </div>
            <Skeleton className='h-3 w-24' />
            {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className='w-full space-y-2'>
                    {Array.from({ length: 6 }).map((_, i) => (
                        <Skeleton key={i} className={cn('h-3', i === 5 ? 'w-1/2' : 'w-full')} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export { DetailNewsSkeleton };
