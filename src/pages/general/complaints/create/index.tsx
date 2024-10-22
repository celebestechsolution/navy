import type { NextPageWithLayout } from '@/types/app/next-layout';

import { CreateComplaintContent } from '@/features/general/complaints/create/create-complaint-content';

import { DetectDeviceLayout } from '@/layouts/detect-device-layout';
import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { MobileScreenLayout } from '@/layouts/mobile-screen-layout';
import { RootLayout } from '@/layouts/root-layout';

const CreateComplaintPage: NextPageWithLayout = () => {
    return <CreateComplaintContent />;
};

CreateComplaintPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Buat Pengaduan Baru' className='bg-background'>
            <DetectDeviceLayout>
                <MobileScreenLayout>
                    <MobileNavigation />
                    <GeneralLayout>{page}</GeneralLayout>
                </MobileScreenLayout>
            </DetectDeviceLayout>
        </RootLayout>
    );
};

export default CreateComplaintPage;
