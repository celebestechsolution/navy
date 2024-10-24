import type { BreadcrumbItem } from '@/types/app/breadcrumb-item';

import { useFetchSiapBoss } from '@/api/queries/fetch-innovations-intro';

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
        label: 'SIAP BOSS',
        type: 'page',
    },
];

const SiapBossContent = () => {
    const { data, status } = useFetchSiapBoss();

    return (
        <>
            <AppShell className='bg-background-secondary'>
                <section id='siap-boss-breadcrumb'>
                    <SimpleBreadcrumb items={breadcrumbItems} />
                </section>
            </AppShell>
            <AppShell className='relative border-t border-border'>
                <section id='siap-boss-content' className='space-y-6'>
                    <Header>
                        <Header.Title>SIAP BOSS</Header.Title>
                    </Header>

                    {status === 'pending' && <InnovationsIntroSkeleton />}

                    {status === 'success' && <InnovationsIntroBlock item={data} title='SIAP BOSS' />}

                    {status === 'error' && <FetchErrorBlock />}
                </section>
                <PageVersion label={2} />
            </AppShell>
        </>
    );
};

export { SiapBossContent };
