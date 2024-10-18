import Link from 'next/link';

import { AppShell } from '@/components/shells/app-shell';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { cn } from '@/lib/utils';

const ComplaintListsContent = () => {
    return (
        <>
            <AppShell className='bg-background-secondary'>
                <section id='complaint-lists-breadcrumb'>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href='/'>Beranda</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href='/complaints'>Pengaduan</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Daftar Pengaduan</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </section>
            </AppShell>
            <AppShell className='border-t border-border'>
                <section id='complaint-lists-content' className='space-y-6'>
                    <h1 className='text-lg font-bold text-primary'>Daftar Pengaduan</h1>
                    <div className='grid grid-cols-1 space-y-3 divide-y'>
                        {Array.from({ length: 5 }).map((_, i) => (
                            <div key={i} className={cn('flex items-center gap-4', i !== 0 && 'pt-3')}>
                                <img
                                    className='aspect-square size-[5.438rem] rounded-2xl border object-cover object-center'
                                    width={100}
                                    height={100}
                                    src='/images/news-1.png'
                                    alt='Foto Pengaduan 1'
                                />
                                <div className='flex w-full flex-col space-y-2'>
                                    <div className='flex items-center justify-between text-sm text-muted-foreground'>
                                        <span>23 September 2024</span>
                                        <span>10.09</span>
                                    </div>
                                    <div>
                                        <h3 className='font-semibold text-primary'>Pengaduan Perizinan</h3>
                                    </div>
                                    <div className='flex items-center justify-between text-sm text-muted-foreground'>
                                        <span>Status: </span>
                                        <span className='font-semibold text-green-600'>Diterima</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </AppShell>
        </>
    );
};

export { ComplaintListsContent };
