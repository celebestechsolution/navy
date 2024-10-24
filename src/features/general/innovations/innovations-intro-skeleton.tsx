import { cn } from '@/lib/utils';

import { Skeleton } from '@/components/ui/skeleton';

const InnovationsIntroSkeleton = () => {
    return (
        <div className='flex flex-col space-y-5'>
            <div className='flex items-center justify-center'>
                <Skeleton className='aspect-square size-52 rounded-full' />
            </div>
            <div className='flex flex-col space-y-2'>
                <Skeleton className='h-4 w-full' />
                <Skeleton className='h-4 w-1/2' />
            </div>
            <div className='flex flex-col space-y-2'>
                {Array.from({ length: 10 }).map((_, index) => (
                    <Skeleton key={index} className={cn('h-2', index === 9 ? 'w-1/2' : 'w-full')} />
                ))}
            </div>
        </div>
    );
};

export { InnovationsIntroSkeleton };
