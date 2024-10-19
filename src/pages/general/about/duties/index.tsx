import type { NextPageWithLayout } from '@/types/app/next-layout';

import { AboutDutiesContent } from '@/features/general/about/duties/about-duties-content';

import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { RootLayout } from '@/layouts/root-layout';

const AboutDutiesPage: NextPageWithLayout = () => {
    return <AboutDutiesContent />;
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
