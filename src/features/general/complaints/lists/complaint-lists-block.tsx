import type { ComplaintList } from '@/types/api/complaint';

import { cn, formatToFullDate, formatToFullTime } from '@/lib/utils';

interface ComplaintListsBlockProps {
    item: ComplaintList;
    index: number;
}

function getComplaintListStatusClassName(status: ComplaintList['status']['value']): string {
    if (status === 'waiting') {
        return 'text-yellow-600';
    }

    if (status === 'decline') {
        return 'text-destructive';
    }

    if (status === 'accept') {
        return 'text-green-600';
    }

    return 'text-muted-foreground';
}

const ComplaintListsBlock = ({ item, index }: ComplaintListsBlockProps) => {
    return (
        <div className={cn('flex items-center gap-4', index !== 0 && 'pt-3')}>
            <img
                className='aspect-square size-[5.438rem] rounded-2xl border object-cover object-center'
                width={100}
                height={100}
                src={item.image}
                alt='Foto Pengaduan 1'
            />
            <div className='flex w-full flex-col space-y-2'>
                <div className='flex items-center justify-between text-sm text-muted-foreground'>
                    <span>{formatToFullDate(new Date(item.created_at))}</span>
                    <span>{formatToFullTime(new Date(item.created_at))}</span>
                </div>
                <div>
                    <h3 className='font-semibold text-primary'>{item.category}</h3>
                </div>
                <div className='flex items-center justify-between text-sm text-muted-foreground'>
                    <span>Status: </span>
                    <span className={cn('font-semibold', getComplaintListStatusClassName(item.status.value))}>
                        {item.status.label}
                    </span>
                </div>
            </div>
        </div>
    );
};

export { ComplaintListsBlock };
