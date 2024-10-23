import type { BreadcrumbItem } from '@/types/app/breadcrumb-item';

import { useFetchPermitTypes } from '@/api/queries/fetch-permit-types';

import { FetchEmptyBlock } from '@/components/blocks/fetch-empty-block';
import { FetchErrorBlock } from '@/components/blocks/fetch-error-block';
import { Header } from '@/components/header';
import { AppShell } from '@/components/shells/app-shell';
import { SimpleBreadcrumb } from '@/components/simple-breadcrumb';

import { PermitTypesBlock } from './permit-types-block';
import { PermitTypesFilters } from './permit-types-filters';
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

                    <PermitTypesFilters />

                    <div className='space-y-4'>
                        {status === 'pending' && <PermitTypesSkeleton />}

                        {status === 'success' && types.length > 0 ? (
                            types.map((item) => <PermitTypesBlock key={item.id + '-' + item.code} item={item} />)
                        ) : (
                            <FetchEmptyBlock />
                        )}

                        {status === 'error' && <FetchErrorBlock />}
                    </div>
                </section>
            </AppShell>
        </>
    );
};

export { PermitTypesContent };
