import type { NextPageWithLayout } from '@/types/app/next-layout';

import { ComplaintListsContent } from '@/features/general/complaints/lists/complaint-lists-content';

import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { RootLayout } from '@/layouts/root-layout';

const ComplaintListsPage: NextPageWithLayout = () => {
    return <ComplaintListsContent />;
};

ComplaintListsPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Daftar Pengaduan' className='bg-background'>
            <MobileNavigation />
            <GeneralLayout>{page}</GeneralLayout>
        </RootLayout>
    );
};

export default ComplaintListsPage;
