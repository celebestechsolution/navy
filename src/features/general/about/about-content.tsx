import Link from 'next/link';

import type { BreadcrumbItem } from '@/types/app/breadcrumb-item';

import { menus } from '@/layouts/mobile-sheet-links';

import { Header } from '@/components/header';
import { AppShell } from '@/components/shells/app-shell';
import { SimpleBreadcrumb } from '@/components/simple-breadcrumb';
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
                    <Header>
                        <Header.Title>Tentang DPMPTSP</Header.Title>
                    </Header>
                    <div className='mt-6 flex flex-col space-y-4'>
                        {menus[4]['links'].map((item, i) => (
                            <Link key={`${i}${item.label}`} href={item.href} className='group'>
                                <Card className='shadow-none group-hover:bg-accent/75'>
                                    <CardHeader className='flex flex-row items-center justify-between space-y-0 p-5'>
                                        <div className='flex items-center gap-2'>
                                            <TablerIcon name={item.icon!} className='stroke-2 text-primary' />
                                            <CardTitle className='text-primary'>{item.label}</CardTitle>
                                        </div>
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
