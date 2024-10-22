import type { NextPageWithLayout } from '@/types/app/next-layout';

import { AboutDutiesContent } from '@/features/general/about/duties/about-duties-content';

import { DetectDeviceLayout } from '@/layouts/detect-device-layout';
import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { MobileScreenLayout } from '@/layouts/mobile-screen-layout';
import { RootLayout } from '@/layouts/root-layout';

const AboutDutiesPage: NextPageWithLayout = () => {
    return <AboutDutiesContent />;
};

AboutDutiesPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Tugas Pokok & Fungsi' className='bg-background'>
            <DetectDeviceLayout>
                <MobileScreenLayout>
                    <MobileNavigation />
                    <GeneralLayout>{page}</GeneralLayout>
                </MobileScreenLayout>
            </DetectDeviceLayout>
        </RootLayout>
    );
};

export default AboutDutiesPage;
