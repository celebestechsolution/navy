import type { NextPageWithLayout } from '@/types/app/next-layout';

import { PaksiContent } from '@/features/general/innovations/paksi/paksi-content';

import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { RootLayout } from '@/layouts/root-layout';

const PaksiPage: NextPageWithLayout = () => {
    return <PaksiContent />;
};

PaksiPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Paksi'>
            <MobileNavigation />
            <GeneralLayout>{page}</GeneralLayout>
        </RootLayout>
    );
};

export default PaksiPage;
