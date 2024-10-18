import type { NextPageWithLayout } from '@/types/app/next-layout';

import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { RootLayout } from '@/layouts/root-layout';

const ComplaintsPage: NextPageWithLayout = () => {
    return <div>ComplaintsPage</div>;
};

ComplaintsPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Pengaduan' className='bg-background'>
            <MobileNavigation />
            <GeneralLayout>{page}</GeneralLayout>
        </RootLayout>
    );
};

export default ComplaintsPage;
