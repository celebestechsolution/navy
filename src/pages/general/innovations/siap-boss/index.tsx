import type { NextPageWithLayout } from '@/types/app/next-layout';

import { SiapBossContent } from '@/features/general/innovations/siap-boss/siap-boss-content';

import { DetectDeviceLayout } from '@/layouts/detect-device-layout';
import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { MobileScreenLayout } from '@/layouts/mobile-screen-layout';
import { RootLayout } from '@/layouts/root-layout';

const SiapBossPage: NextPageWithLayout = () => {
    return <SiapBossContent />;
};

SiapBossPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Siap Boss'>
            <DetectDeviceLayout>
                <MobileScreenLayout>
                    <MobileNavigation />
                    <GeneralLayout>{page}</GeneralLayout>
                </MobileScreenLayout>
            </DetectDeviceLayout>
        </RootLayout>
    );
};

export default SiapBossPage;
