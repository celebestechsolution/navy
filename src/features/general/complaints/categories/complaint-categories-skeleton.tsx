import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const ComplaintCategoriesSkeleton = () => {
    return Array.from({ length: 5 }).map((_, index) => (
        <Card key={index} className='p-4 shadow-none'>
            <CardHeader className='p-0'>
                <Skeleton className='h-4 w-32' />
            </CardHeader>
            <CardContent className='mb-4 mt-2 space-y-2 p-0'>
                <Skeleton className='h-3 w-64' />
                <Skeleton className='h-3 w-52' />
            </CardContent>
            <CardFooter className='gap-2 p-0'>
                <Skeleton className='h-4 w-48' />
            </CardFooter>
        </Card>
    ));
};

export { ComplaintCategoriesSkeleton };
