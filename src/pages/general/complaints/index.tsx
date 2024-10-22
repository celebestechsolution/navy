import type { NextPageWithLayout } from '@/types/app/next-layout';

import { ComplaintsContent } from '@/features/general/complaints/complaints-content';

import { DetectDeviceLayout } from '@/layouts/detect-device-layout';
import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { MobileScreenLayout } from '@/layouts/mobile-screen-layout';
import { RootLayout } from '@/layouts/root-layout';

const ComplaintsPage: NextPageWithLayout = () => {
    return <ComplaintsContent />;
};

ComplaintsPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Pengaduan' className='bg-background'>
            <DetectDeviceLayout>
                <MobileScreenLayout>
                    <MobileNavigation />
                    <GeneralLayout>{page}</GeneralLayout>
                </MobileScreenLayout>
            </DetectDeviceLayout>
        </RootLayout>
    );
};

export default ComplaintsPage;
