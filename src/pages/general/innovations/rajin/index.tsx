import type { NextPageWithLayout } from '@/types/app/next-layout';

import { RajinContent } from '@/features/general/innovations/rajin/rajin-content';

import { DetectDeviceLayout } from '@/layouts/detect-device-layout';
import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { MobileScreenLayout } from '@/layouts/mobile-screen-layout';
import { RootLayout } from '@/layouts/root-layout';

const RajinPage: NextPageWithLayout = () => {
    return <RajinContent />;
};

RajinPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Rajin'>
            <DetectDeviceLayout>
                <MobileScreenLayout>
                    <MobileNavigation />
                    <GeneralLayout>{page}</GeneralLayout>
                </MobileScreenLayout>
            </DetectDeviceLayout>
        </RootLayout>
    );
};

export default RajinPage;
