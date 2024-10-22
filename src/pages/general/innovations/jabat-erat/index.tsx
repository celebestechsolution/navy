import type { NextPageWithLayout } from '@/types/app/next-layout';

import { JabatEratContent } from '@/features/general/innovations/jabat-erat/jabat-erat-content';

import { DetectDeviceLayout } from '@/layouts/detect-device-layout';
import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { MobileScreenLayout } from '@/layouts/mobile-screen-layout';
import { RootLayout } from '@/layouts/root-layout';

const JabatEratPage: NextPageWithLayout = () => {
    return <JabatEratContent />;
};

JabatEratPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Jabat Erat'>
            <DetectDeviceLayout>
                <MobileScreenLayout>
                    <MobileNavigation />
                    <GeneralLayout>{page}</GeneralLayout>
                </MobileScreenLayout>
            </DetectDeviceLayout>
        </RootLayout>
    );
};

export default JabatEratPage;
