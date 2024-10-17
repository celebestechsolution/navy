import type { NextPageWithLayout } from '@/types/app/next-layout';

import { PermitTypesContent } from '@/features/general/permits/types/permit-types-content';
import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { RootLayout } from '@/layouts/root-layout';

const PermitTypes: NextPageWithLayout = () => {
    return <PermitTypesContent />;
};

PermitTypes.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Daftar Jenis Izin' className='bg-background'>
            <MobileNavigation />
            <GeneralLayout>{page}</GeneralLayout>
        </RootLayout>
    );
};

export default PermitTypes;
