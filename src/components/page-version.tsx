import { Badge } from './ui/badge';

const PageVersion = ({ label = 2 }: { label?: number | string }) => {
    return (
        <div className='absolute -top-3 right-2'>
            <Badge variant='outline' className='bg-background'>
                Page Version : {label.toString()}
            </Badge>
        </div>
    );
};

export { PageVersion };
