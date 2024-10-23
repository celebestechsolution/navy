import type { PermitType } from '@/types/api/permit';

import { Card, CardContent } from '@/components/ui/card';

interface PermitTypesBlockProps {
    item: PermitType;
}

const PermitTypesBlock = ({ item }: PermitTypesBlockProps) => {
    return (
        <Card className='shadow-none'>
            <CardContent className='flex flex-col space-y-1.5 p-4'>
                <h3 className='font-bold text-primary'>{item.code}</h3>
                <p className='text-sm text-muted-foreground'>{item.name}</p>
            </CardContent>
        </Card>
    );
};

export { PermitTypesBlock };
