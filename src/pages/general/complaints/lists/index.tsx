import type { NextPageWithLayout } from '@/types/app/next-layout';

import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { RootLayout } from '@/layouts/root-layout';

const ComplaintListsPage: NextPageWithLayout = () => {
    return <div>ComplaintListsPage</div>;
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
