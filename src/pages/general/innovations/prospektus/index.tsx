import type { NextPageWithLayout } from '@/types/app/next-layout';

import { ProspektusContent } from '@/features/general/innovations/prospektus/prospektus-content';

import { DetectDeviceLayout } from '@/layouts/detect-device-layout';
import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { MobileScreenLayout } from '@/layouts/mobile-screen-layout';
import { RootLayout } from '@/layouts/root-layout';

const ProspektusPage: NextPageWithLayout = () => {
    return <ProspektusContent />;
};

ProspektusPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='PROSPEKTUS' className='bg-background'>
            <DetectDeviceLayout>
                <MobileScreenLayout>
                    <MobileNavigation />
                    <GeneralLayout>{page}</GeneralLayout>
                </MobileScreenLayout>
            </DetectDeviceLayout>
        </RootLayout>
    );
};

export default ProspektusPage;
