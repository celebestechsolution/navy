import type { BreadcrumbItem } from '@/types/app/breadcrumb-item';

import { useFetchRajin } from '@/api/queries/fetch-innovations-intro';

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
        label: 'RAJIN',
        type: 'page',
    },
];

const RajinContent = () => {
    const { data, status } = useFetchRajin();

    return (
        <>
            <AppShell className='bg-background-secondary'>
                <section id='rajin-breadcrumb'>
                    <SimpleBreadcrumb items={breadcrumbItems} />
                </section>
            </AppShell>
            <AppShell className='relative border-t border-border'>
                <section id='rajin-content' className='space-y-6'>
                    <Header>
                        <Header.Title>RAJIN</Header.Title>
                    </Header>

                    {status === 'pending' && <InnovationsIntroSkeleton />}

                    {status === 'success' && <InnovationsIntroBlock item={data} title='RAJIN' />}

                    {status === 'error' && <FetchErrorBlock />}
                </section>
                <PageVersion label={2} />
            </AppShell>
        </>
    );
};

export { RajinContent };
