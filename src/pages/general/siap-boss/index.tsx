import type { NextPageWithLayout } from '@/types/app/next-layout';

import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { RootLayout } from '@/layouts/root-layout';

const SiapBossPage: NextPageWithLayout = () => {
    return <div>SiapBossPage</div>;
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
