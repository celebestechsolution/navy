import type { BreadcrumbItem } from '@/types/app/breadcrumb-item';

import { useFetchProspektus } from '@/api/queries/fetch-innovations-intro';

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
        label: 'PROSPEKTUS',
        type: 'page',
    },
];

const ProspektusContent = () => {
    const { data, status } = useFetchProspektus();

    return (
        <>
            <AppShell className='bg-background-secondary'>
                <section id='prospektus-breadcrumb'>
                    <SimpleBreadcrumb items={breadcrumbItems} />
                </section>
            </AppShell>
            <AppShell className='relative border-t border-border'>
                <section id='prospektus-content' className='space-y-6'>
                    <Header>
                        <Header.Title>PROSPEKTUS</Header.Title>
                    </Header>

                    {status === 'pending' && <InnovationsIntroSkeleton />}

                    {status === 'success' && <InnovationsIntroBlock item={data} title='PROSPEKTUS' />}

                    {status === 'error' && <FetchErrorBlock />}
                </section>
                <PageVersion label={2} />
            </AppShell>
        </>
    );
};

export { ProspektusContent };
