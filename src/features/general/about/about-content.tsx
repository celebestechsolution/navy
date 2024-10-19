import Link from 'next/link';

import { menus } from '@/layouts/mobile-sheet-links';

import { AppShell } from '@/components/shells/app-shell';
import { BreadcrumbItem, SimpleBreadcrumb } from '@/components/simple-breadcrumb';
import { TablerIcon } from '@/components/tabler-icon';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

const breadcrumbItems: BreadcrumbItem[] = [
    {
        label: 'Beranda',
        type: 'link',
        href: '/',
    },
    {
        label: 'Tentang DPMPTSP',
        type: 'page',
    },
];

const AboutContent = () => {
    return (
        <>
            <AppShell className='bg-background-secondary'>
                <section id='about-breadcrumb'>
                    <SimpleBreadcrumb items={breadcrumbItems} />
                </section>
            </AppShell>
            <AppShell className='border-t border-border'>
                <section id='about-content'>
                    <h1 className='text-lg font-bold text-primary'>Tentang DPMPTSP</h1>
                    <div className='mt-6 flex flex-col space-y-4'>
                        {menus[4]['links'].map((item, i) => (
                            <Link key={`${i}${item.label}`} href={item.href} className='group'>
                                <Card className='shadow-none group-hover:bg-accent/75'>
                                    <CardHeader className='flex flex-row items-center justify-between space-y-0 p-5'>
                                        <CardTitle className='text-primary'>{item.label}</CardTitle>
                                        <TablerIcon name='IconChevronRight' className='stroke-2 text-primary' />
                                    </CardHeader>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </section>
            </AppShell>
        </>
    );
};

export { AboutContent };
