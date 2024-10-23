import { TablerIcon } from '../tabler-icon';
import { Card, CardContent } from '../ui/card';

const FetchEmptyBlock = () => {
    return (
        <Card className='shadow-none'>
            <CardContent className='flex flex-col items-center justify-center space-y-2.5 p-4'>
                <TablerIcon name='IconExclamationCircle' className='size-10 stroke-yellow-500' />
                <p className='text-center text-sm text-muted-foreground'>Data yang sedang anda cari tidak ada!</p>
            </CardContent>
        </Card>
    );
};

export { FetchEmptyBlock };
