import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const PermitServiceStandardsSkeleton = () => {
    return Array.from({ length: 5 }).map((_, index) => (
        <Card key={index} className='shadow-none'>
            <CardContent className='flex items-center gap-2 p-4'>
                <Skeleton className='size-5 shrink-0' />
                <Skeleton className='h-5 w-full' />
            </CardContent>
        </Card>
    ));
};

export { PermitServiceStandardsSkeleton };
