import type { NextPageWithLayout } from '@/types/app/next-layout';

import { PermitApplicantsContent } from '@/features/general/permits/applicants/permit-applicants-content';

import { DetectDeviceLayout } from '@/layouts/detect-device-layout';
import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { MobileScreenLayout } from '@/layouts/mobile-screen-layout';
import { RootLayout } from '@/layouts/root-layout';

const PermitApplicantsPage: NextPageWithLayout = () => {
    return <PermitApplicantsContent />;
};

PermitApplicantsPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Jumlah Pemohon Izin' className='bg-background'>
            <DetectDeviceLayout>
                <MobileScreenLayout>
                    <MobileNavigation />
                    <GeneralLayout>{page}</GeneralLayout>
                </MobileScreenLayout>
            </DetectDeviceLayout>
        </RootLayout>
    );
};

export default PermitApplicantsPage;
