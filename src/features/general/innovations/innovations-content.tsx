import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { innovationsLists } from './innovations-lists';

const InnovationsContent = () => {
    return (
        <>
            <h1 className='mb-5 text-2xl font-bold text-primary'>Inovasi</h1>

            <section id='licensing-lists' className='flex flex-col gap-3'>
                {innovationsLists.map((item, i) => (
                    <figure key={i} className='relative w-auto overflow-hidden rounded-xl border bg-card p-4'>
                        <div className='flex flex-row items-center gap-2'>
                            <img
                                className='shrink-0 rounded-full'
                                width={50}
                                height={50}
                                alt={item.image.alt}
                                src={item.image.src}
                            />
                            <div className='flex flex-col'>
                                <Link href={item.href}>
                                    <h3 className='text-sm font-bold text-primary'>{item.title}</h3>
                                </Link>
                                <p className='text-xs font-medium text-primary/80'>{item.sub_title}</p>
                            </div>
                        </div>
                        <p className='mt-5 line-clamp-3 text-sm text-muted-foreground'>{item.description}</p>
                        <Separator className='my-3' />
                        <Link href={item.href} className='flex items-center justify-end'>
                            <Badge variant='secondary' className='rounded-full text-xs font-medium text-foreground'>
                                Selengkapnya
                            </Badge>
                        </Link>
                    </figure>
                ))}
            </section>
        </>
    );
};

export { InnovationsContent };
