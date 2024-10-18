import type { NextPageWithLayout } from '@/types/app/next-layout';

import { PermitServiceStandardsContent } from '@/features/general/permits/service-standards/permit-service-standards-content';

import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { RootLayout } from '@/layouts/root-layout';

const PermitServiceStandardsPage: NextPageWithLayout = () => {
    return <PermitServiceStandardsContent />;
};

PermitServiceStandardsPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Standar Pelayanan Perizinan' className='bg-background'>
            <MobileNavigation />
            <GeneralLayout>{page}</GeneralLayout>
        </RootLayout>
    );
};

export default PermitServiceStandardsPage;
