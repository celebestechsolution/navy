import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const PermitTypesSkeleton = () => {
    return Array.from({ length: 5 }).map((_, index) => (
        <Card key={index} className='shadow-none'>
            <CardContent className='space-y-2 p-4'>
                <Skeleton className='h-4 w-24' />
                <Skeleton className='h-2.5 w-52' />
            </CardContent>
        </Card>
    ));
};

export { PermitTypesSkeleton };
