import type { NextPageWithLayout } from '@/types/app/next-layout';

import { ComplaintListsContent } from '@/features/general/complaints/lists/complaint-lists-content';

import { DetectDeviceLayout } from '@/layouts/detect-device-layout';
import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { MobileScreenLayout } from '@/layouts/mobile-screen-layout';
import { RootLayout } from '@/layouts/root-layout';

const ComplaintListsPage: NextPageWithLayout = () => {
    return <ComplaintListsContent />;
};

ComplaintListsPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Daftar Pengaduan' className='bg-background'>
            <DetectDeviceLayout>
                <MobileScreenLayout>
                    <MobileNavigation />
                    <GeneralLayout>{page}</GeneralLayout>
                </MobileScreenLayout>
            </DetectDeviceLayout>
        </RootLayout>
    );
};

export default ComplaintListsPage;
