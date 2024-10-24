import type { BreadcrumbItem } from '@/types/app/breadcrumb-item';

import { useFetchPermitServiceStandards } from '@/api/queries/fetch-permit-service-standards';

import { FetchErrorBlock } from '@/components/blocks/fetch-error-block';
import { Header } from '@/components/header';
import { PageVersion } from '@/components/page-version';
import { AppShell } from '@/components/shells/app-shell';
import { SimpleBreadcrumb } from '@/components/simple-breadcrumb';

import { PermitServiceStandardsBlock } from './permit-service-standards-block';
import { PermitServiceStandardsFilters } from './permit-service-standards-filters';
import { PermitServiceStandardsSkeleton } from './permit-service-standards-skeleton';

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
    const { data: serviceStandards, status } = useFetchPermitServiceStandards();

    return (
        <>
            <AppShell className='bg-background-secondary'>
                <section id='permit-applicants-breadcrumb'>
                    <SimpleBreadcrumb items={breadcrumbItems} />
                </section>
            </AppShell>
            <AppShell className='relative border-t border-border'>
                <section id='permit-applicants-content' className='space-y-6'>
                    <Header>
                        <Header.Title>Standar Pelayanan Perizinan</Header.Title>
                    </Header>

                    <PermitServiceStandardsFilters />

                    {status === 'pending' && <PermitServiceStandardsSkeleton />}

                    {status === 'success' && (
                        <div className='flex flex-col space-y-4'>
                            {serviceStandards.map((item) => (
                                <PermitServiceStandardsBlock key={item.id} item={item} />
                            ))}
                        </div>
                    )}

                    {status === 'error' && <FetchErrorBlock />}
                </section>

                <PageVersion label={2} />
            </AppShell>
        </>
    );
};

export { PermitServiceStandardsContent };
