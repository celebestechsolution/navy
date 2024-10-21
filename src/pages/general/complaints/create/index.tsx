import type { NextPageWithLayout } from '@/types/app/next-layout';

import { CreateComplaintContent } from '@/features/general/complaints/create/create-complaint-content';

import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { RootLayout } from '@/layouts/root-layout';

const CreateComplaintPage: NextPageWithLayout = () => {
    return <CreateComplaintContent />;
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
