import type { NextPageWithLayout } from '@/types/app/next-layout';

import { PermitTypesContent } from '@/features/general/permits/types/permit-types-content';
import { DetectDeviceLayout } from '@/layouts/detect-device-layout';
import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { MobileScreenLayout } from '@/layouts/mobile-screen-layout';
import { RootLayout } from '@/layouts/root-layout';

const PermitTypesPage: NextPageWithLayout = () => {
    return <PermitTypesContent />;
};

PermitTypesPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Daftar Jenis Izin' className='bg-background'>
            <DetectDeviceLayout>
                <MobileScreenLayout>
                    <MobileNavigation />
                    <GeneralLayout>{page}</GeneralLayout>
                </MobileScreenLayout>
            </DetectDeviceLayout>
        </RootLayout>
    );
};

export default PermitTypesPage;
