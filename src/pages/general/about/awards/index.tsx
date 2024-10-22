import type { NextPageWithLayout } from '@/types/app/next-layout';

import { AboutAwardsContent } from '@/features/general/about/awards/about-awards-content';

import { DetectDeviceLayout } from '@/layouts/detect-device-layout';
import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { MobileScreenLayout } from '@/layouts/mobile-screen-layout';
import { RootLayout } from '@/layouts/root-layout';

const AboutAwardsPage: NextPageWithLayout = () => {
    return <AboutAwardsContent />;
};

AboutAwardsPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Penghargaan' className='bg-background'>
            <DetectDeviceLayout>
                <MobileScreenLayout>
                    <MobileNavigation />
                    <GeneralLayout>{page}</GeneralLayout>
                </MobileScreenLayout>
            </DetectDeviceLayout>
        </RootLayout>
    );
};

export default AboutAwardsPage;
