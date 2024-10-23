import type { BreadcrumbItem } from '@/types/app/breadcrumb-item';

import { useFetchPermitLists } from '@/api/queries/fetch-permit-lists';

import { FetchEmptyBlock } from '@/components/blocks/fetch-empty-block';
import { FetchErrorBlock } from '@/components/blocks/fetch-error-block';
import { Header } from '@/components/header';
import { PageVersion } from '@/components/page-version';
import { AppShell } from '@/components/shells/app-shell';
import { SimpleBreadcrumb } from '@/components/simple-breadcrumb';
import { Accordion } from '@/components/ui/accordion';

import { PermitListsBlock } from './permit-lists-block';
import { PermitListsSkeleton } from './permit-lists-skeleton';

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
        label: 'Daftar Izin Proses',
        type: 'page',
    },
];

const PermitListsContent = () => {
    const { data: lists, status } = useFetchPermitLists();

    return (
        <>
            <AppShell className='bg-background-secondary'>
                <section id='permit-lists-breadcrumb'>
                    <SimpleBreadcrumb items={breadcrumbItems} />
                </section>
            </AppShell>
            <AppShell className='relative border-t border-border'>
                <section id='permit-lists-content' className='space-y-6'>
                    <Header>
                        <Header.Title>Daftar Izin Proses</Header.Title>
                    </Header>

                    {status === 'pending' && <PermitListsSkeleton />}

                    {status === 'success' && lists.length > 0 ? (
                        <Accordion type='single' collapsible className='w-full space-y-4'>
                            {lists.map((list) => (
                                <PermitListsBlock key={list.id} item={list} />
                            ))}
                        </Accordion>
                    ) : (
                        <FetchEmptyBlock />
                    )}

                    {status === 'error' && <FetchErrorBlock />}
                </section>
                <PageVersion label={2} />
            </AppShell>
        </>
    );
};

export { PermitListsContent };
