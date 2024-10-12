import type { NextPageWithLayout } from '@/types/app/next-layout';

import { SiapBossContent } from '@/features/general/siap-boss/siap-boss-content';

import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { RootLayout } from '@/layouts/root-layout';

const SiapBossPage: NextPageWithLayout = () => {
    return <SiapBossContent />;
};

SiapBossPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Siap Boss'>
            <MobileNavigation />
            <GeneralLayout>{page}</GeneralLayout>
        </RootLayout>
    );
};

export default SiapBossPage;
