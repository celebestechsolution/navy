import type { NextPageWithLayout } from '@/types/app/next-layout';

import { JabatEratContent } from '@/features/general/innovations/jabat-erat/jabat-erat-content';

import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { RootLayout } from '@/layouts/root-layout';

const JabatEratPage: NextPageWithLayout = () => {
    return <JabatEratContent />;
};

JabatEratPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Jabat Erat'>
            <MobileNavigation />
            <GeneralLayout>{page}</GeneralLayout>
        </RootLayout>
    );
};

export default JabatEratPage;
