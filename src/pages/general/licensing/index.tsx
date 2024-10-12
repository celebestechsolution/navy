import type { NextPageWithLayout } from '@/types/app/next-layout';

import { LicensingContent } from '@/features/general/licensing/licensing-content';

import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { RootLayout } from '@/layouts/root-layout';

const LicensingPage: NextPageWithLayout = () => {
    return <LicensingContent />;
};

LicensingPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Perizinan'>
            <MobileNavigation />
            <GeneralLayout>{page}</GeneralLayout>
        </RootLayout>
    );
};

export default LicensingPage;
