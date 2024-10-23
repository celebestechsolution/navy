import { usePermitTypesFilters } from '@/services/states/use-permit-types-filters';

import { TablerIcon } from '@/components/tabler-icon';
import { Input } from '@/components/ui/input';

const PermitTypesFilters = () => {
    const setSearch = usePermitTypesFilters((state) => state.setSearch);

    return (
        <div className='relative'>
            <Input
                type='text'
                className='peer ps-9'
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Cari Jenis Izin'
            />
            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 text-muted-foreground/80 peer-disabled:opacity-50'>
                <TablerIcon name='IconSearch' />
            </div>
        </div>
    );
};

export { PermitTypesFilters };
