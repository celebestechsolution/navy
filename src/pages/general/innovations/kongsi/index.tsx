import type { NextPageWithLayout } from '@/types/app/next-layout';

import { KongsiContent } from '@/features/general/innovations/kongsi/kongsi-content';

import { DetectDeviceLayout } from '@/layouts/detect-device-layout';
import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { MobileScreenLayout } from '@/layouts/mobile-screen-layout';
import { RootLayout } from '@/layouts/root-layout';

const KongsiPage: NextPageWithLayout = () => {
    return <KongsiContent />;
};

KongsiPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='KONGSI' className='bg-background'>
            <DetectDeviceLayout>
                <MobileScreenLayout>
                    <MobileNavigation />
                    <GeneralLayout>{page}</GeneralLayout>
                </MobileScreenLayout>
            </DetectDeviceLayout>
        </RootLayout>
    );
};

export default KongsiPage;
