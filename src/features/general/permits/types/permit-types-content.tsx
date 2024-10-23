import type { BreadcrumbItem } from '@/types/app/breadcrumb-item';

import { useFetchPermitTypes } from '@/api/queries/fetch-permit-types';

import { FetchErrorBlock } from '@/components/blocks/fetch-error-block';
import { Header } from '@/components/header';
import { AppShell } from '@/components/shells/app-shell';
import { SimpleBreadcrumb } from '@/components/simple-breadcrumb';
import { TablerIcon } from '@/components/tabler-icon';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { PermitTypesSkeleton } from './permit-types-skeleton';

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
    const { data: types, status } = useFetchPermitTypes();

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
                        <Input type='text' className='peer ps-9' placeholder='Cari Jenis Izin' />
                        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 text-muted-foreground/80 peer-disabled:opacity-50'>
                            <TablerIcon name='IconSearch' />
                        </div>
                    </div>

                    <div className='space-y-4'>
                        {status === 'pending' && <PermitTypesSkeleton />}
                        {status === 'success' &&
                            types.map((item) => (
                                <Card key={item.id + '-' + item.code} className='shadow-none'>
                                    <CardContent className='flex flex-col space-y-1.5 p-4'>
                                        <h3 className='font-bold text-primary'>{item.code}</h3>
                                        <p className='text-sm text-muted-foreground'>{item.name}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        {status === 'error' && <FetchErrorBlock />}
                    </div>
                </section>
            </AppShell>
        </>
    );
};

export { PermitTypesContent };
