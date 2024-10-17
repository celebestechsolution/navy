import * as React from 'react';

import Link from 'next/link';

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
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { permitTypes } from './permit-types-data';

const PermitTypesContent = () => {
    const [query, setQuery] = React.useState<string>('');

    const filteredData = query
        ? permitTypes.filter(
              (item) =>
                  item.label.toLowerCase().includes(query.toLocaleLowerCase()) ||
                  item.description.toLowerCase().includes(query.toLowerCase()),
          )
        : permitTypes;

    return (
        <>
            <AppShell className='bg-background-secondary'>
                <section id='permit-lists-breadcrumb'>
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
                                <BreadcrumbPage>Daftar Jenis Izin</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </section>
            </AppShell>
            <AppShell className='border-t border-border'>
                <section id='permit-lists-content' className='space-y-6'>
                    <h1 className='text-lg font-bold text-primary'>Daftar Jenis Izin</h1>

                    <div className='relative'>
                        <Input
                            type='text'
                            className='peer ps-9'
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder='Cari Jenis Izin'
                        />
                        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 text-muted-foreground/80 peer-disabled:opacity-50'>
                            <TablerIcon name='IconSearch' />
                        </div>
                    </div>

                    <div className='space-y-4'>
                        {filteredData.length > 0 ? (
                            filteredData.map((item, i) => (
                                <Card key={`${i}/${item.label}`} className='shadow-none group-hover:bg-accent/75'>
                                    <CardHeader className='p-4'>
                                        <CardTitle className='font-bold text-primary'>{item.label}</CardTitle>
                                        <CardDescription>{item.description}</CardDescription>
                                    </CardHeader>
                                </Card>
                            ))
                        ) : (
                            <h5 className='w-full text-center text-lg text-destructive'>
                                Jenis Izin tidak dapat ditemukan
                            </h5>
                        )}
                    </div>
                </section>
            </AppShell>
        </>
    );
};

export { PermitTypesContent };
