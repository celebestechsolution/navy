import Link from 'next/link';

import { useFetchHomeNews } from '@/api/queries/fetch-home-news';

import { NewsBlock } from '@/components/blocks/news-block';
import { NewsSkeleton } from '@/components/skeletons/news-skeleton';

const SectionNews = () => {
    const { data: news, status } = useFetchHomeNews();

    return (
        <section id='latests-news' className='space-y-6 py-10'>
            <div className='flex items-center justify-between'>
                <h5 className='text-base font-semibold text-primary'>Berita Terkini</h5>
                <Link href='/latest-news' className='text-sm font-normal text-muted-foreground underline'>
                    Lihat Semua
                </Link>
            </div>
            <div className='flex flex-col gap-y-4'>
                {status === 'pending' && <NewsSkeleton />}

                {status === 'success' &&
                    news.map((item, index) => (
                        <NewsBlock key={item.id + index}>
                            <NewsBlock.Image src={item.image} alt={item.title} />
                            <NewsBlock.Body>
                                <Link className='group' href={`/latest-news/${item.slug}`}>
                                    <NewsBlock.Title className='group-hover:underline'>{item.title}</NewsBlock.Title>
                                </Link>
                                <NewsBlock.SubTitle>{item.category}</NewsBlock.SubTitle>
                            </NewsBlock.Body>
                        </NewsBlock>
                    ))}
            </div>
        </section>
    );
};

export { SectionNews };
