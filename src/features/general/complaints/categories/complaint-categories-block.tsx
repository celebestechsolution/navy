import Link from 'next/link';

import type { ComplaintCategory } from '@/types/api/complaint';

import { PdfLogo } from '@/components/pdf-logo';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface ComplaintCategoriesBlockProps {
    item: ComplaintCategory;
}

const ComplaintCategoriesBlock = ({ item }: ComplaintCategoriesBlockProps) => {
    return (
        <Card className='p-4 shadow-none'>
            <CardHeader className='p-0'>
                <CardTitle className='text-primary'>{item.category}</CardTitle>
            </CardHeader>
            <CardContent className='mb-4 mt-2 p-0'>
                <p className='text-sm text-muted-foreground'>{item.description}</p>
            </CardContent>
            <CardFooter className='gap-2 p-0'>
                <PdfLogo className='size-5' />
                <Link
                    href={item.legal}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-sm font-medium text-primary'
                    download={`dasar-hukum-${item.category}`}>
                    Download Dasar Hukum
                </Link>
            </CardFooter>
        </Card>
    );
};

export { ComplaintCategoriesBlock };
