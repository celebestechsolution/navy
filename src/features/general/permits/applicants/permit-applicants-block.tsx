import type { PermitApplicant } from '@/types/api/permit';

import { cn } from '@/lib/utils';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface PermitApplicantsBlockProps {
    item: PermitApplicant;
    index: number;
}

const PermitApplicantsBlock = ({ item, index }: PermitApplicantsBlockProps) => {
    return (
        <Card className={cn('space-y-2 p-4 shadow-none', index === 0 && 'col-span-full')}>
            <CardHeader className='p-0'>
                <CardTitle className='text-sm font-medium text-primary'>{item.label}</CardTitle>
            </CardHeader>
            <CardContent className='p-0'>
                <div className='text-2xl font-bold text-primary'>{item.value}</div>
            </CardContent>
            <CardFooter className='p-0'>
                <p className='text-sm text-green-600'>Pemohon</p>
            </CardFooter>
        </Card>
    );
};

export { PermitApplicantsBlock };
