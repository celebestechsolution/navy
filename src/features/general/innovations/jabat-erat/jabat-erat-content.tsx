import type { BreadcrumbItem } from '@/types/app/breadcrumb-item';

import { useFetchJabatErat } from '@/api/queries/fetch-innovations-intro';

import { FetchErrorBlock } from '@/components/blocks/fetch-error-block';
import { Header } from '@/components/header';
import { PageVersion } from '@/components/page-version';
import { AppShell } from '@/components/shells/app-shell';
import { SimpleBreadcrumb } from '@/components/simple-breadcrumb';

import { InnovationsIntroBlock } from '../innovations-intro-block';
import { InnovationsIntroSkeleton } from '../innovations-intro-skeleton';

const breadcrumbItems: BreadcrumbItem[] = [
    {
        label: 'Beranda',
        type: 'link',
        href: '/',
    },
    {
        label: 'Inovasi',
        type: 'link',
        href: '/innovations',
    },
    {
        label: 'JABAT ERAT',
        type: 'page',
    },
];

const JabatEratContent = () => {
    const { data, status } = useFetchJabatErat();

    return (
        <>
            <AppShell className='bg-background-secondary'>
                <section id='jabat-erat-breadcrumb'>
                    <SimpleBreadcrumb items={breadcrumbItems} />
                </section>
            </AppShell>
            <AppShell className='relative border-t border-border'>
                <section id='jabat-erat-content' className='space-y-6'>
                    <Header>
                        <Header.Title>JABAT ERAT</Header.Title>
                    </Header>

                    {status === 'pending' && <InnovationsIntroSkeleton />}

                    {status === 'success' && <InnovationsIntroBlock item={data} title='JABAT ERAT' />}

                    {status === 'error' && <FetchErrorBlock />}
                </section>
                <PageVersion label={2} />
            </AppShell>
        </>
    );
};

export { JabatEratContent };
