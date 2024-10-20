import * as React from 'react';

import Link from 'next/link';

import { NewsBlock } from '@/components/blocks/news-block';
import { NewsSkeleton } from '@/components/skeletons/news-skeleton';
import { newsLists } from './news-lists';

const SectionNews = () => {
    const [news, setNews] = React.useState<typeof newsLists>([]);

    React.useEffect(() => {
        setTimeout(() => setNews(newsLists), 1000);
    }, []);

    return (
        <section id='latests-news' className='space-y-6 py-10'>
            <div className='flex items-center justify-between'>
                <h5 className='text-base font-semibold text-primary'>Berita Terkini</h5>
                <Link href='/latest-news' className='text-sm font-normal text-muted-foreground underline'>
                    Lihat Semua
                </Link>
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
    );
};

export { SectionNews };
