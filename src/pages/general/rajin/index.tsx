import type { NextPageWithLayout } from '@/types/app/next-layout';

import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { RootLayout } from '@/layouts/root-layout';

const RajinPage: NextPageWithLayout = () => {
    return (
        <div>
            <h1>Rajin Page</h1>
        </div>
    );
};

RajinPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Rajin'>
            <MobileNavigation />
            <GeneralLayout>{page}</GeneralLayout>
        </RootLayout>
    );
};

export default RajinPage;
