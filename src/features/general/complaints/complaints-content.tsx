import Link from 'next/link';

import { menus } from '@/layouts/mobile-sheet-links';

import { Header } from '@/components/header';
import { AppShell } from '@/components/shells/app-shell';
import { TablerIcon } from '@/components/tabler-icon';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

const ComplaintsContent = () => {
    return (
        <>
            <AppShell className='bg-background-secondary'>
                <section id='complaints-breadcrumb'>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href='/'>Beranda</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Pengaduan</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </section>
            </AppShell>
            <AppShell className='border-t border-border'>
                <section id='complaints-content'>
                    <Header>
                        <Header.Title>Pengaduan</Header.Title>
                    </Header>
                    <div className='mt-6 flex flex-col space-y-4'>
                        {menus[3]['links'].map((item, i) => (
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

export { ComplaintsContent };
