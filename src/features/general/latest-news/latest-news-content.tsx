import type { BreadcrumbItem } from '@/types/app/breadcrumb-item';

import { useFetchPaginatedNews } from '@/api/queries/fetch-paginated-news';
import { usePaginatedNewsFilters } from '@/services/states/use-paginated-news-filters';

import { FetchErrorBlock } from '@/components/blocks/fetch-error-block';
import { NewsBlock } from '@/components/blocks/news-block';
import { Header } from '@/components/header';
import { PageVersion } from '@/components/page-version';
import { AppShell } from '@/components/shells/app-shell';
import { SimpleBreadcrumb } from '@/components/simple-breadcrumb';
import { NewsSkeleton } from '@/components/skeletons/news-skeleton';
import { TablerIcon } from '@/components/tabler-icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

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

    // TODO: Need Refactor
    const setSearch = usePaginatedNewsFilters((state) => state.setSearch);
    const nextPage = usePaginatedNewsFilters((state) => state.nextPage);
    const previousPage = usePaginatedNewsFilters((state) => state.previousPage);

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

                    <div className='relative'>
                        <Input
                            type='text'
                            className='peer ps-9'
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder='Cari Berita'
                        />
                        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 text-muted-foreground/80 peer-disabled:opacity-50'>
                            <TablerIcon name='IconSearch' />
                        </div>
                    </div>

                    {status === 'pending' && <NewsSkeleton />}

                    {status === 'success' &&
                        news.data.map((item, index) => (
                            <NewsBlock key={item.id + index}>
                                <NewsBlock.Image src={item.image} alt={item.title} />
                                <NewsBlock.Body>
                                    <NewsBlock.Title>{item.title}</NewsBlock.Title>
                                    <NewsBlock.SubTitle>{item.category}</NewsBlock.SubTitle>
                                </NewsBlock.Body>
                            </NewsBlock>
                        ))}

                    {status === 'error' && <FetchErrorBlock />}

                    {status === 'success' && (
                        <div className='flex items-center justify-center gap-5'>
                            <Button
                                disabled={!news.pagination.hasPreviousPage}
                                onClick={previousPage}
                                variant='outline'
                                size='icon'>
                                <TablerIcon name='IconChevronLeft' />
                            </Button>

                            <div className='inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors'>
                                {`${news.pagination.currentPage} / ${news.data.length} dari ${news.pagination.totalItems}`}
                            </div>

                            <Button
                                disabled={!news.pagination.hasNextPage}
                                onClick={nextPage}
                                variant='outline'
                                size='icon'>
                                <TablerIcon name='IconChevronRight' />
                            </Button>
                        </div>
                    )}
                </section>

                <PageVersion label={2} />
            </AppShell>
        </>
    );
};

export { LatestNewsContent };
