import { Skeleton } from '../ui/skeleton';

const NewsSkeleton = () => {
    return (
        <div className='flex items-center gap-2'>
            <Skeleton className='aspect-square size-[5.438rem] rounded-2xl border object-cover object-center' />
            <div className='flex flex-col gap-2.5'>
                <Skeleton className='h-4 w-64 rounded-full' />
                <Skeleton className='h-4 w-52 rounded-full' />
                <Skeleton className='h-2.5 w-20 rounded-full' />
            </div>
        </div>
    );
};

export { NewsSkeleton };
