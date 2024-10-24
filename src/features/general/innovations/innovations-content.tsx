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
        label: 'Inovasi',
        type: 'page',
    },
];

const InnovationsContent = () => {
    return (
        <>
            <AppShell className='bg-background-secondary'>
                <section id='innovations-breadcrumb'>
                    <SimpleBreadcrumb items={breadcrumbItems} />
                </section>
            </AppShell>
            <AppShell className='border-t border-border'>
                <section id='innovations-content' className='space-y-6'>
                    <Header>
                        <Header.Title>Inovasi</Header.Title>
                    </Header>

                    <div className='flex flex-col space-y-4'>
                        {menus[2]['links'].map((item, i) => (
                            <Link key={`${i}${item.label}`} href={item.href} className='group'>
                                <Card className='shadow-none group-hover:bg-accent/75'>
                                    <CardHeader className='flex flex-row items-center justify-between space-y-0 p-5'>
                                        <div className='flex items-center gap-2'>
                                            {item.use === 'image' && (
                                                <img
                                                    className='size-5 shrink-0 rounded-full'
                                                    width={50}
                                                    height={50}
                                                    alt={item.label}
                                                    src={item.image}
                                                />
                                            )}
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

export { InnovationsContent };
