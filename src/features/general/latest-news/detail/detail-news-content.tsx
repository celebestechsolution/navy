import type { BreadcrumbItem } from '@/types/app/breadcrumb-item';

import { useFetchSingleNewsBySlug } from '@/api/queries/fetch-single-news';

import { FetchErrorBlock } from '@/components/blocks/fetch-error-block';
import { Header } from '@/components/header';
import { PageVersion } from '@/components/page-version';
import { AppShell } from '@/components/shells/app-shell';
import { SimpleBreadcrumb } from '@/components/simple-breadcrumb';

import { DetailNewsBlock } from './detail-news-block';
import { DetailNewsSkeleton } from './detail-news-skeleton';

const breadcrumbItems: BreadcrumbItem[] = [
    {
        label: 'Beranda',
        type: 'link',
        href: '/',
    },
    {
        label: 'Berita Terkini',
        type: 'link',
        href: '/latest-news',
    },
    {
        label: 'Detail Berita',
        type: 'page',
    },
];

interface DetailNewsContentProps {
    slug: string;
}

const DetailNewsContent = ({ slug }: DetailNewsContentProps) => {
    const { data: news, status } = useFetchSingleNewsBySlug(slug);

    return (
        <>
            <AppShell className='bg-background-secondary'>
                <section id='detail-news-breadcrumb'>
                    <SimpleBreadcrumb items={breadcrumbItems} />
                </section>
            </AppShell>
            <AppShell className='relative border-t border-border'>
                <section id='detail-news-content' className='space-y-6'>
                    <Header>
                        <Header.Title>Detail Berita</Header.Title>
                    </Header>

                    {status === 'pending' && <DetailNewsSkeleton />}

                    {status === 'success' && <DetailNewsBlock news={news} />}

                    {status === 'error' && <FetchErrorBlock />}
                </section>
                <PageVersion label={2} />
            </AppShell>
        </>
    );
};

export { DetailNewsContent };
