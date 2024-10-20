import * as React from 'react';

import type { BreadcrumbItem } from '@/types/app/breadcrumb-item';

import { newsData } from './latest-news-data';

import { NewsBlock } from '@/components/blocks/news-block';
import { Header } from '@/components/header';
import { AppShell } from '@/components/shells/app-shell';
import { SimpleBreadcrumb } from '@/components/simple-breadcrumb';
import { NewsSkeleton } from '@/components/skeletons/news-skeleton';
import { TablerIcon } from '@/components/tabler-icon';
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
    const [news, setNews] = React.useState<typeof newsData>([]);

    React.useEffect(() => {
        setTimeout(() => setNews(newsData), 1500);
    }, []);

    return (
        <>
            <AppShell className='bg-background-secondary'>
                <section id='permit-lists-breadcrumb'>
                    <SimpleBreadcrumb items={breadcrumbItems} />
                </section>
            </AppShell>
            <AppShell className='border-t border-border'>
                <section id='permit-lists-content' className='space-y-6'>
                    <Header>
                        <Header.Title>Berita Terkini</Header.Title>
                    </Header>

                    <div className='relative'>
                        <Input type='text' className='peer ps-9' placeholder='Cari Berita' />
                        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 text-muted-foreground/80 peer-disabled:opacity-50'>
                            <TablerIcon name='IconSearch' />
                        </div>
                    </div>

                    <div className='flex flex-col gap-y-4'>
                        {news.length
                            ? news.map((item, i) => (
                                  <NewsBlock key={`${i}${item.title}`}>
                                      <NewsBlock.Image src={item.image} alt={item.title} />
                                      <NewsBlock.Body>
                                          <NewsBlock.Title>{item.title}</NewsBlock.Title>
                                          <NewsBlock.SubTitle>{item.category}</NewsBlock.SubTitle>
                                      </NewsBlock.Body>
                                  </NewsBlock>
                              ))
                            : Array.from({ length: 5 }).map((_, i) => <NewsSkeleton key={i} />)}
                    </div>
                </section>
            </AppShell>
        </>
    );
};

export { LatestNewsContent };
