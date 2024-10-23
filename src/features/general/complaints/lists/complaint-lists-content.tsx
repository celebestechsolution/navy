import type { BreadcrumbItem } from '@/types/app/breadcrumb-item';

import { useFetchComplaintLists } from '@/api/queries/fetch-complaint-lists';

import { Header } from '@/components/header';
import { PageVersion } from '@/components/page-version';
import { AppShell } from '@/components/shells/app-shell';
import { SimpleBreadcrumb } from '@/components/simple-breadcrumb';

import { FetchErrorBlock } from '@/components/blocks/fetch-error-block';
import { ComplaintListsBlock } from './complaint-lists-block';
import { ComplaintListsSkeleton } from './complaint-lists-skeleton';

const breadcrumbItems: BreadcrumbItem[] = [
    {
        label: 'Beranda',
        type: 'link',
        href: '/',
    },
    {
        label: 'Pengaduan',
        type: 'link',
        href: '/complaints',
    },
    {
        label: 'Daftar Pengaduan',
        type: 'page',
    },
];

const ComplaintListsContent = () => {
    const { data: lists, status } = useFetchComplaintLists();

    return (
        <>
            <AppShell className='bg-background-secondary'>
                <section id='complaint-lists-breadcrumb'>
                    <SimpleBreadcrumb items={breadcrumbItems} />
                </section>
            </AppShell>
            <AppShell className='relative border-t border-border'>
                <section id='complaint-lists-content' className='space-y-6'>
                    <Header>
                        <Header.Title>Daftar Pengaduan</Header.Title>
                    </Header>

                    <div className='grid grid-cols-1 space-y-3 divide-y'>
                        {status === 'pending' && <ComplaintListsSkeleton />}

                        {status === 'success' &&
                            lists.map((item, index) => <ComplaintListsBlock key={item.id} item={item} index={index} />)}

                        {status === 'error' && <FetchErrorBlock />}
                    </div>
                </section>

                <PageVersion label={2} />
            </AppShell>
        </>
    );
};

export { ComplaintListsContent };
