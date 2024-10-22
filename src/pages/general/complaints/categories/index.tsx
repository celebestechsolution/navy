import type { NextPageWithLayout } from '@/types/app/next-layout';

import { ComplaintCategoriesContent } from '@/features/general/complaints/categories/complaint-categories-content';

import { DetectDeviceLayout } from '@/layouts/detect-device-layout';
import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { MobileScreenLayout } from '@/layouts/mobile-screen-layout';
import { RootLayout } from '@/layouts/root-layout';

const ComplaintCategoriesPage: NextPageWithLayout = () => {
    return <ComplaintCategoriesContent />;
};

ComplaintCategoriesPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Kategori Pengaduan & Dasar Hukum' className='bg-background'>
            <DetectDeviceLayout>
                <MobileScreenLayout>
                    <MobileNavigation />
                    <GeneralLayout>{page}</GeneralLayout>
                </MobileScreenLayout>
            </DetectDeviceLayout>
        </RootLayout>
    );
};

export default ComplaintCategoriesPage;
