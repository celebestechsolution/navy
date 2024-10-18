import type { NextPageWithLayout } from '@/types/app/next-layout';

import { PermitListsContent } from '@/features/general/permits/lists/permit-lists-content';

import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { RootLayout } from '@/layouts/root-layout';

const PermitListsPage: NextPageWithLayout = () => {
    return <PermitListsContent />;
};

PermitListsPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Daftar Izin Proses' className='bg-background'>
            <MobileNavigation />
            <GeneralLayout>{page}</GeneralLayout>
        </RootLayout>
    );
};

export default PermitListsPage;
