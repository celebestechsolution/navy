import * as React from 'react';

import Link from 'next/link';

import { PdfLogo } from '@/components/pdf-logo';
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
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { serviceStandards } from './permit-service-standards-data';

const PermitServiceStandardsContent = () => {
    const [query, setQuery] = React.useState<string>('');

    const filteredData = query
        ? serviceStandards.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()))
        : serviceStandards;

    return (
        <>
            <AppShell className='bg-background-secondary'>
                <section id='permit-applicants-breadcrumb'>
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
                                    <Link href='/permits'>Perizinan</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Standar Pelayanan Perizinan</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </section>
            </AppShell>
            <AppShell className='border-t border-border'>
                <section id='permit-applicants-content' className='space-y-6'>
                    <h1 className='text-lg font-bold text-primary'>Standar Pelayanan Perizinan</h1>

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
