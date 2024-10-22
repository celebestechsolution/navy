import type { NextPageWithLayout } from '@/types/app/next-layout';

import { AboutContent } from '@/features/general/about/about-content';

import { DetectDeviceLayout } from '@/layouts/detect-device-layout';
import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { MobileScreenLayout } from '@/layouts/mobile-screen-layout';
import { RootLayout } from '@/layouts/root-layout';

const AboutPage: NextPageWithLayout = () => {
    return <AboutContent />;
};

AboutPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Tentang DPMPTSP' className='bg-background'>
            <DetectDeviceLayout>
                <MobileScreenLayout>
                    <MobileNavigation />
                    <GeneralLayout>{page}</GeneralLayout>
                </MobileScreenLayout>
            </DetectDeviceLayout>
        </RootLayout>
    );
};

export default AboutPage;
