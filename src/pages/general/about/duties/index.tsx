import type { NextPageWithLayout } from '@/types/app/next-layout';

import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { RootLayout } from '@/layouts/root-layout';

const AboutDutiesPage: NextPageWithLayout = () => {
    return <div>AboutDutiesPage</div>;
};

AboutDutiesPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Tugas Pokok & Fungsi' className='bg-background'>
            <MobileNavigation />
            <GeneralLayout>{page}</GeneralLayout>
        </RootLayout>
    );
};

export default AboutDutiesPage;
