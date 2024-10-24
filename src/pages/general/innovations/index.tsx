import type { NextPageWithLayout } from '@/types/app/next-layout';

import { InnovationsContent } from '@/features/general/innovations/innovations-content';

import { DetectDeviceLayout } from '@/layouts/detect-device-layout';
import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { MobileScreenLayout } from '@/layouts/mobile-screen-layout';
import { RootLayout } from '@/layouts/root-layout';

const InnovationsPage: NextPageWithLayout = () => {
    return <InnovationsContent />;
};

InnovationsPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Inovasi' className='bg-background'>
            <DetectDeviceLayout>
                <MobileScreenLayout>
                    <MobileNavigation />
                    <GeneralLayout>{page}</GeneralLayout>
                </MobileScreenLayout>
            </DetectDeviceLayout>
        </RootLayout>
    );
};

export default InnovationsPage;
