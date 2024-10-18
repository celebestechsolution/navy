import type { NextPageWithLayout } from '@/types/app/next-layout';

import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { RootLayout } from '@/layouts/root-layout';

const ComplaintCategoriesPage: NextPageWithLayout = () => {
    return <div>Kategori Pengaduan & Dasar Hukum</div>;
};

ComplaintCategoriesPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Kategori Pengaduan & Dasar Hukum' className='bg-background'>
            <MobileNavigation />
            <GeneralLayout>{page}</GeneralLayout>
        </RootLayout>
    );
};

export default ComplaintCategoriesPage;
