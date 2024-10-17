import type { NextPageWithLayout } from '@/types/app/next-layout';

import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { RootLayout } from '@/layouts/root-layout';

const PermitTypes: NextPageWithLayout = () => {
    return <div>PermitTypes</div>;
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
