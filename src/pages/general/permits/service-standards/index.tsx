import type { NextPageWithLayout } from '@/types/app/next-layout';

import { PermitServiceStandardsContent } from '@/features/general/permits/service-standards/permit-service-standards-content';

import { DetectDeviceLayout } from '@/layouts/detect-device-layout';
import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { MobileScreenLayout } from '@/layouts/mobile-screen-layout';
import { RootLayout } from '@/layouts/root-layout';

const PermitServiceStandardsPage: NextPageWithLayout = () => {
    return <PermitServiceStandardsContent />;
};

PermitServiceStandardsPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Standar Pelayanan Perizinan' className='bg-background'>
            <DetectDeviceLayout>
                <MobileScreenLayout>
                    <MobileNavigation />
                    <GeneralLayout>{page}</GeneralLayout>
                </MobileScreenLayout>
            </DetectDeviceLayout>
        </RootLayout>
    );
};

export default PermitServiceStandardsPage;
