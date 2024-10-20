import Link from 'next/link';

import type { BreadcrumbItem } from '@/types/app/breadcrumb-item';

import { categories } from './complaint-categories-data';

import { Header } from '@/components/header';
import { PdfLogo } from '@/components/pdf-logo';
import { AppShell } from '@/components/shells/app-shell';
import { SimpleBreadcrumb } from '@/components/simple-breadcrumb';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const breadcrumbItems: BreadcrumbItem[] = [
    {
        label: 'Beranda',
        type: 'link',
        href: '/',
    },
    {
        label: 'Pengaduan',
        type: 'link',
        href: '/complaints',
    },
    {
        label: 'Kategori Pengaduan & Dasar Hukum',
        type: 'page',
    },
];

const ComplaintCategoriesContent = () => {
    return (
        <>
            <AppShell className='bg-background-secondary'>
                <section id='complaint-categories-breadcrumb' className=''>
                    <SimpleBreadcrumb items={breadcrumbItems} />
                </section>
            </AppShell>
            <AppShell className='border-t border-border'>
                <section id='complaint-categories-content' className='space-y-6'>
                    <Header>
                        <Header.Title>Kategori Pengaduan</Header.Title>
                    </Header>
                    <div className='flex flex-col space-y-4'>
                        {categories.map((category, i) => (
                            <Card key={i} className='p-4 shadow-none'>
                                <CardHeader className='p-0'>
                                    <CardTitle className='text-primary'>{category.title}</CardTitle>
                                </CardHeader>
                                <CardContent className='mb-4 mt-2 p-0'>
                                    <p className='text-sm text-muted-foreground'>{category.description}</p>
                                </CardContent>
                                <CardFooter className='gap-2 p-0'>
                                    <PdfLogo className='size-5' />
                                    <Link href='/' className='text-sm font-medium text-primary'>
                                        Download Dasar Hukum
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </section>
            </AppShell>
        </>
    );
};

export { ComplaintCategoriesContent };
