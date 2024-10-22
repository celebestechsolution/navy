import type { NextPageWithLayout } from '@/types/app/next-layout';

import { PermitListsContent } from '@/features/general/permits/lists/permit-lists-content';

import { DetectDeviceLayout } from '@/layouts/detect-device-layout';
import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { MobileScreenLayout } from '@/layouts/mobile-screen-layout';
import { RootLayout } from '@/layouts/root-layout';

const PermitListsPage: NextPageWithLayout = () => {
    return <PermitListsContent />;
};

PermitListsPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Daftar Izin Proses' className='bg-background'>
            <DetectDeviceLayout>
                <MobileScreenLayout>
                    <MobileNavigation />
                    <GeneralLayout>{page}</GeneralLayout>
                </MobileScreenLayout>
            </DetectDeviceLayout>
        </RootLayout>
    );
};

export default PermitListsPage;
