import type { NextPageWithLayout } from '@/types/app/next-layout';

import { HomeContent } from '@/features/general/home/home-content';

import { DetectDeviceLayout } from '@/layouts/detect-device-layout';
import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { MobileScreenLayout } from '@/layouts/mobile-screen-layout';
import { RootLayout } from '@/layouts/root-layout';

const Home: NextPageWithLayout = () => {
    return <HomeContent />;
};

Home.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout>
            <DetectDeviceLayout>
                <MobileScreenLayout>
                    <MobileNavigation />
                    <GeneralLayout>{page}</GeneralLayout>
                </MobileScreenLayout>
            </DetectDeviceLayout>
        </RootLayout>
    );
};

export default Home;
