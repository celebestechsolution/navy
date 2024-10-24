import type { News } from '@/types/api/news';

import { NewsBlock } from '@/components/blocks/news-block';

interface LatestNewsBlockProps {
    item: News;
}

const LatestNewsBlock = ({ item }: LatestNewsBlockProps) => {
    return (
        <NewsBlock>
            <NewsBlock.Image src={item.image} alt={item.title} />
            <NewsBlock.Body>
                <NewsBlock.Title>{item.title}</NewsBlock.Title>
                <NewsBlock.SubTitle>{item.category}</NewsBlock.SubTitle>
            </NewsBlock.Body>
        </NewsBlock>
    );
};

export { LatestNewsBlock };
