import * as React from 'react';

import Link from 'next/link';

import { Skeleton } from '@/components/ui/skeleton';
import { newsLists } from './news-lists';

const NewsBlock = () => {
    const [news, setNews] = React.useState<typeof newsLists>([]);

    React.useEffect(() => {
        setTimeout(() => setNews(newsLists), 5000);
    }, []);

    return (
        <div className='flex flex-col gap-y-4'>
            {news.length
                ? news.map((item, i) => (
                      <div key={`${i}${item.title}`} className='flex items-center gap-2'>
                          <img
                              className='aspect-square size-[5.438rem] rounded-2xl border object-cover object-center'
                              width={100}
                              height={100}
                              src={item.image}
                              alt={item.title}
                          />
                          <div className='flex flex-col gap-1.5'>
                              <h3 className='line-clamp-2 text-base font-semibold text-primary'>{item.title}</h3>
                              <p className='text-sm font-normal text-green-600'>{item.category}</p>
                          </div>
                      </div>
                  ))
                : Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className='flex items-center gap-2'>
                          <Skeleton className='aspect-square size-[5.438rem] rounded-2xl border object-cover object-center' />
                          <div className='flex flex-col gap-2.5'>
                              <Skeleton className='h-5 w-52 rounded-full' />
                              <Skeleton className='h-2.5 w-24 rounded-full' />
                          </div>
                      </div>
                  ))}
        </div>
    );
};

const SectionNews = () => {
    return (
        <section id='latests-news' className='space-y-6 py-10'>
            <div className='flex items-center justify-between'>
                <h5 className='text-base font-semibold text-primary'>Berita Terkini</h5>
                <Link href='/' className='text-sm font-normal text-muted-foreground underline'>
                    Lihat Semua
                </Link>
            </div>
            <NewsBlock />
        </section>
    );
};

export { SectionNews };
