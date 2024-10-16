import Link from 'next/link';

import { newsLists } from './news-lists';

const SectionNews = () => {
    return (
        <section id='latests-news' className='space-y-6 py-10'>
            <div className='flex items-center justify-between'>
                <h5 className='text-base font-semibold text-primary'>Berita Terkini</h5>
                <Link href='/' className='text-sm font-normal text-muted-foreground underline'>
                    Lihat Semua
                </Link>
            </div>
            <div className='flex flex-col gap-y-4'>
                {newsLists.map((item, i) => (
                    <div key={`${i}${item.title}`} className='flex items-center gap-2'>
                        <img
                            className='aspect-square size-[5.438rem] rounded-2xl border object-cover object-center'
                            width={100}
                            height={100}
                            src={item.image}
                            alt={item.title}
                        />
                        <div className='flex flex-col gap-1.5'>
                            <h3 className='text-base font-semibold text-primary'>{item.title}</h3>
                            <p className='text-sm font-normal text-green-600'>{item.category}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export { SectionNews };
