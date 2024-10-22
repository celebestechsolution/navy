import type { NextPageWithLayout } from '@/types/app/next-layout';

import { AboutProfileContent } from '@/features/general/about/profile/about-profile-content';

import { DetectDeviceLayout } from '@/layouts/detect-device-layout';
import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { MobileScreenLayout } from '@/layouts/mobile-screen-layout';
import { RootLayout } from '@/layouts/root-layout';

const AboutProfilePage: NextPageWithLayout = () => {
    return <AboutProfileContent />;
};

AboutProfilePage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Profil DPMPTSP' className='bg-background'>
            <DetectDeviceLayout>
                <MobileScreenLayout>
                    <MobileNavigation />
                    <GeneralLayout>{page}</GeneralLayout>
                </MobileScreenLayout>
            </DetectDeviceLayout>
        </RootLayout>
    );
};

export default AboutProfilePage;
