import type { NextPageWithLayout } from '@/types/app/next-layout';

import { InnovationsContent } from '@/features/general/innovations/innovations-content';

import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { RootLayout } from '@/layouts/root-layout';

const InnovationsPage: NextPageWithLayout = () => {
    return <InnovationsContent />;
};

InnovationsPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Inovasi'>
            <MobileNavigation />
            <GeneralLayout>{page}</GeneralLayout>
        </RootLayout>
    );
};

export default InnovationsPage;
