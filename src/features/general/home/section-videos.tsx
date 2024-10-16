import Link from 'next/link';

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { videoLists } from './video-lists';

const SectionVideos = () => {
    return (
        <section id='latest-videos' className='space-y-6 py-10'>
            <div className='flex items-center justify-between'>
                <h5 className='text-base font-semibold text-primary'>Video</h5>
                <Link
                    href='https://www.youtube.com/@bumilasinrang'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-sm font-normal text-muted-foreground underline'>
                    Lihat Video Lainnya
                </Link>
            </div>
            <ScrollArea>
                <div className='flex space-x-4 pb-4'>
                    {videoLists.map((item, i) => (
                        <div key={`${i}${item.title}`} className='flex w-56 flex-col gap-2'>
                            <div className='relative'>
                                <img
                                    className='aspect-video h-auto w-56 rounded-2xl border object-cover object-center'
                                    width={640}
                                    height={480}
                                    src={item.thumbnail}
                                    alt={item.title}
                                />
                                <div className='absolute bottom-2 right-2 flex items-center justify-center rounded bg-black/75 px-2 py-1'>
                                    <span className='text-xs text-white'>{item.length}</span>
                                </div>
                            </div>
                            <figcaption className='line-clamp-2 text-base font-semibold text-primary'>
                                {item.title}
                            </figcaption>
                        </div>
                    ))}
                </div>
                <ScrollBar orientation='horizontal' />
            </ScrollArea>
        </section>
    );
};

export { SectionVideos };
