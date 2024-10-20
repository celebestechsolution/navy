import * as React from 'react';

import type { BreadcrumbItem } from '@/types/app/breadcrumb-item';

import { serviceStandards } from './permit-service-standards-data';

import { Header } from '@/components/header';
import { PdfLogo } from '@/components/pdf-logo';
import { AppShell } from '@/components/shells/app-shell';
import { SimpleBreadcrumb } from '@/components/simple-breadcrumb';
import { TablerIcon } from '@/components/tabler-icon';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const breadcrumbItems: BreadcrumbItem[] = [
    {
        label: 'Beranda',
        type: 'link',
        href: '/',
    },
    {
        label: 'Perizinan',
        type: 'link',
        href: '/permits',
    },
    {
        label: 'Standar Pelayanan Perizinan',
        type: 'page',
    },
];

const PermitServiceStandardsContent = () => {
    const [query, setQuery] = React.useState<string>('');

    const filteredData = query
        ? serviceStandards.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()))
        : serviceStandards;

    return (
        <>
            <AppShell className='bg-background-secondary'>
                <section id='permit-applicants-breadcrumb'>
                    <SimpleBreadcrumb items={breadcrumbItems} />
                </section>
            </AppShell>
            <AppShell className='border-t border-border'>
                <section id='permit-applicants-content' className='space-y-6'>
                    <Header>
                        <Header.Title>Standar Pelayanan Perizinan</Header.Title>
                    </Header>

                    <div className='relative'>
                        <Input
                            type='text'
                            className='peer rounded-xl ps-9'
                            placeholder='Cari Surat Izin'
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 text-muted-foreground/80 peer-disabled:opacity-50'>
                            <TablerIcon name='IconSearch' />
                        </div>
                    </div>

                    <div className='flex flex-col space-y-4'>
                        {filteredData.map((item, i) => (
                            <Card key={i} className='shadow-none'>
                                <CardContent className='flex items-center gap-2 p-4'>
                                    <PdfLogo className='size-6 shrink-0' />
                                    <h5>{item.label}</h5>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </AppShell>
        </>
    );
};

export { PermitServiceStandardsContent };
