import { News } from '@/types/api/news';

interface DetailNewsBlockProps {
    news: News;
}

const DetailNewsBlock = ({ news }: DetailNewsBlockProps) => {
    return (
        <div className='flex flex-col space-y-4'>
            <div className='flex flex-col space-y-2'>
                <img
                    className='aspect-video h-auto w-full rounded-xl border object-cover object-center'
                    src={news.image}
                    alt={news.title}
                    width={552}
                    height={348}
                />
                <span className='text-sm font-medium capitalize text-green-600'>{news.category}</span>
                <h2 className='text-lg font-bold text-primary'>{news.title}</h2>
            </div>
            <time className='text-sm font-medium text-muted-foreground'>Jumat, 20 September 2024</time>
            <p className='text-sm leading-7 text-foreground'>{news.content}</p>
        </div>
    );
};

export { DetailNewsBlock };
