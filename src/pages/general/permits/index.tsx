import type { NextPageWithLayout } from '@/types/app/next-layout';

import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { RootLayout } from '@/layouts/root-layout';

const PermitsPage: NextPageWithLayout = () => {
    return <div>PermitsPage</div>;
};

PermitsPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Perizinan'>
            <MobileNavigation />
            <GeneralLayout>{page}</GeneralLayout>
        </RootLayout>
    );
};

export default PermitsPage;
