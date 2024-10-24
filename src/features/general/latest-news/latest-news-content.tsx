import type { BreadcrumbItem } from '@/types/app/breadcrumb-item';

import { useFetchPaginatedNews } from '@/api/queries/fetch-paginated-news';

import { FetchErrorBlock } from '@/components/blocks/fetch-error-block';
import { Header } from '@/components/header';
import { PageVersion } from '@/components/page-version';
import { AppShell } from '@/components/shells/app-shell';
import { SimpleBreadcrumb } from '@/components/simple-breadcrumb';
import { NewsSkeleton } from '@/components/skeletons/news-skeleton';

import { LatestNewsBlock } from './latest-news-block';
import { LatestNewsFilters, LatestNewsPagination } from './latest-news-filters';

const breadcrumbItems: BreadcrumbItem[] = [
    {
        label: 'Beranda',
        type: 'link',
        href: '/',
    },
    {
        label: 'Berita Terkini',
        type: 'page',
    },
];

const LatestNewsContent = () => {
    const { data: news, status } = useFetchPaginatedNews();

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
                        <Header.Title>Berita Terkini</Header.Title>
                    </Header>

                    <LatestNewsFilters />

                    {status === 'pending' && <NewsSkeleton />}

                    {status === 'success' &&
                        news.data.map((item, index) => <LatestNewsBlock key={item.id + index} item={item} />)}

                    {status === 'error' && <FetchErrorBlock />}

                    {status === 'success' && <LatestNewsPagination pagination={news.pagination} />}
                </section>

                <PageVersion label={2} />
            </AppShell>
        </>
    );
};

export { LatestNewsContent };
