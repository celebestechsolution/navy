import type { NextPageWithLayout } from '@/types/app/next-layout';

import { RajinContent } from '@/features/general/rajin/rajin-content';

import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { RootLayout } from '@/layouts/root-layout';

const RajinPage: NextPageWithLayout = () => {
    return <RajinContent />;
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
