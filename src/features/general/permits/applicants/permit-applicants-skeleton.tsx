import { cn } from '@/lib/utils';

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const PermitApplicantsSkeleton = () => {
    return Array.from({ length: 7 }).map((_, index) => (
        <Card key={index} className={cn('space-y-2 p-4 shadow-none', index === 0 && 'col-span-full')}>
            <CardHeader className='p-0'>
                <Skeleton className={cn('h-2.5', index === 0 ? 'w-52' : 'w-3/4')} />
            </CardHeader>
            <CardContent className='p-0'>
                <Skeleton className='h-7 w-10' />
            </CardContent>
            <CardFooter className='p-0'>
                <Skeleton className={cn('h-2.5', index === 0 ? 'w-32' : 'w-1/2')} />
            </CardFooter>
        </Card>
    ));
};

export { PermitApplicantsSkeleton };
