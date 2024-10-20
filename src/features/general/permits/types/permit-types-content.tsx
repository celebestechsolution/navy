import * as React from 'react';

import type { BreadcrumbItem } from '@/types/app/breadcrumb-item';

import { permitTypes } from './permit-types-data';

import { Header } from '@/components/header';
import { AppShell } from '@/components/shells/app-shell';
import { SimpleBreadcrumb } from '@/components/simple-breadcrumb';
import { TablerIcon } from '@/components/tabler-icon';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
        label: 'Daftar Jenis Izin',
        type: 'page',
    },
];

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
                    <SimpleBreadcrumb items={breadcrumbItems} />
                </section>
            </AppShell>
            <AppShell className='border-t border-border'>
                <section id='permit-lists-content' className='space-y-6'>
                    <Header>
                        <Header.Title>Daftar Jenis Izin</Header.Title>
                    </Header>

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
