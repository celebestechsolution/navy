import { TablerIcon } from '../tabler-icon';
import { Card, CardContent } from '../ui/card';

const FetchErrorBlock = () => {
    return (
        <Card className='shadow-none'>
            <CardContent className='flex flex-col items-center justify-center p-4'>
                <TablerIcon name='IconMoodSad' className='size-10 stroke-destructive stroke-2' />
                <p className='text-center text-sm text-muted-foreground'>
                    Ada kesalahan dalam mengakses data, coba lagi beberapa saat.
                </p>
            </CardContent>
        </Card>
    );
};

export { FetchErrorBlock };
