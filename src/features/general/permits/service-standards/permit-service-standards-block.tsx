import Link from 'next/link';

import type { PermitServiceStandard } from '@/types/api/permit';

import { PdfLogo } from '@/components/pdf-logo';
import { Card, CardContent } from '@/components/ui/card';

interface PermitServiceStandardsBlockProps {
    item: PermitServiceStandard;
}

const PermitServiceStandardsBlock = ({ item }: PermitServiceStandardsBlockProps) => {
    return (
        <Link
            href={item.url}
            target='_blank'
            rel='noopener noreferrer'
            download={`standar-pelayanan-${item.name}`}
            className='group'>
            <Card className='shadow-none group-hover:bg-accent/75'>
                <CardContent className='flex items-center gap-2 p-4'>
                    <PdfLogo className='size-5 shrink-0' />
                    <h5 className='text-sm font-medium text-primary'>{item.name}</h5>
                </CardContent>
            </Card>
        </Link>
    );
};

export { PermitServiceStandardsBlock };
