import type { NextPageWithLayout } from '@/types/app/next-layout';

import { PermitsContent } from '@/features/general/permits/permits-content';

import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { RootLayout } from '@/layouts/root-layout';

const PermitsPage: NextPageWithLayout = () => {
    return <PermitsContent />;
};

PermitsPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Perizinan' className='bg-background'>
            <MobileNavigation />
            <GeneralLayout>{page}</GeneralLayout>
        </RootLayout>
    );
};

export default PermitsPage;
