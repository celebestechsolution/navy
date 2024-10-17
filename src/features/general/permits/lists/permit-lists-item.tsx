import * as React from 'react';

import { type PermitList, permitLists } from './permit-lists-data';

import { Accordion } from '@/components/ui/accordion';
import { PermitListsBlock } from './permit-lists-block';
import { PermitListsSkeleton } from './permit-lists-skeleton';

const PermitListsItem = () => {
    const [lists, setLists] = React.useState<PermitList[]>([]);

    React.useEffect(() => {
        setTimeout(() => setLists(permitLists), 3000);
    }, []);

    return (
        <Accordion type='single' collapsible className='w-full space-y-4'>
            {lists.length > 0 ? (
                lists.map((item, i) => <PermitListsBlock key={`${i}/${item.permit_code}`} item={item} />)
            ) : (
                <PermitListsSkeleton />
            )}
        </Accordion>
    );
};

export { PermitListsItem };
