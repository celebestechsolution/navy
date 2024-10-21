import type { NextPageWithLayout } from '@/types/app/next-layout';

import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { RootLayout } from '@/layouts/root-layout';

const CreateComplaintPage: NextPageWithLayout = () => {
    return <div>CreateComplaintPage</div>;
};

CreateComplaintPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Buat Pengaduan Baru' className='bg-background'>
            <MobileNavigation />
            <GeneralLayout>{page}</GeneralLayout>
        </RootLayout>
    );
};

export default CreateComplaintPage;
