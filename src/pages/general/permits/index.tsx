import type { NextPageWithLayout } from '@/types/app/next-layout';

import { PermitsContent } from '@/features/general/permits/permits-content';

import { DetectDeviceLayout } from '@/layouts/detect-device-layout';
import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { MobileScreenLayout } from '@/layouts/mobile-screen-layout';
import { RootLayout } from '@/layouts/root-layout';

const PermitsPage: NextPageWithLayout = () => {
    return <PermitsContent />;
};

PermitsPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Perizinan' className='bg-background'>
            <DetectDeviceLayout>
                <MobileScreenLayout>
                    <MobileNavigation />
                    <GeneralLayout>{page}</GeneralLayout>
                </MobileScreenLayout>
            </DetectDeviceLayout>
        </RootLayout>
    );
};

export default PermitsPage;
