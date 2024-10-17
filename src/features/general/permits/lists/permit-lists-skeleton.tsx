import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const PermitListsSkeleton = () => {
    return Array.from({ length: 5 }).map((_, i) => (
        <Card key={i} className='px-2.5 py-4 shadow-none'>
            <div className='flex items-center justify-between'>
                <div className='flex flex-col gap-1'>
                    <Skeleton className='h-4 w-52 rounded-full' />
                    <Skeleton className='h-2.5 w-24 rounded-full' />
                </div>
                <div>
                    <Skeleton className='size-5 rounded-full' />
                </div>
            </div>
        </Card>
    ));
};

export { PermitListsSkeleton };
