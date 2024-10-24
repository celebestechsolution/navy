import Link from 'next/link';

import type { InnovationIntro } from '@/types/api/innovation';

import { PdfLogo } from '@/components/pdf-logo';
import { Card, CardContent } from '@/components/ui/card';

interface InnovationsIntroBlockProps {
    item: InnovationIntro;
    title: string;
    children?: React.ReactNode;
}

const InnovationsIntroBlock = ({ item, title, children }: InnovationsIntroBlockProps) => {
    return (
        <>
            <div className='flex flex-col space-y-5'>
                <div className='flex items-center justify-center'>
                    <img className='aspect-square size-52' src={item.logo} alt={`${item.title} Logo`} />
                </div>
                <h3 className='text-sm font-semibold text-primary'>{item.title}</h3>
                <p className='text-sm font-normal text-muted-foreground'>{item.description}</p>
            </div>

            <>{children}</>

            <div className='flex flex-col space-y-5'>
                <h3 className='text-sm font-semibold text-primary'>Pergub Inovasi {title}</h3>
                <Link
                    href={item.legal}
                    target='_blank'
                    rel='noopener noreferrer'
                    download={`pergub-inovasi-${title}`}
                    className='group'>
                    <Card className='shadow-none group-hover:bg-accent/75'>
                        <CardContent className='flex items-center gap-2 p-4'>
                            <PdfLogo className='size-5 shrink-0' />
                            <h5 className='text-sm font-medium text-primary'>Pergub {title}</h5>
                        </CardContent>
                    </Card>
                </Link>
            </div>
        </>
    );
};

export { InnovationsIntroBlock };
