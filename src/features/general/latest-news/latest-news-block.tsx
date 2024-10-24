import type { News } from '@/types/api/news';

import { NewsBlock } from '@/components/blocks/news-block';
import Link from 'next/link';

interface LatestNewsBlockProps {
    item: News;
}

const LatestNewsBlock = ({ item }: LatestNewsBlockProps) => {
    return (
        <NewsBlock>
            <NewsBlock.Image src={item.image} alt={item.title} />
            <NewsBlock.Body>
                <Link className='group' href={`/latest-news/${item.slug}`}>
                    <NewsBlock.Title className='group-hover:underline'>{item.title}</NewsBlock.Title>
                </Link>
                <NewsBlock.SubTitle>{item.category}</NewsBlock.SubTitle>
            </NewsBlock.Body>
        </NewsBlock>
    );
};

export { LatestNewsBlock };
