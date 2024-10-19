import type { NextPageWithLayout } from '@/types/app/next-layout';

import { AboutContent } from '@/features/general/about/about-content';

import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { RootLayout } from '@/layouts/root-layout';

const AboutPage: NextPageWithLayout = () => {
    return <AboutContent />;
};

AboutPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Tentang DPMPTSP' className='bg-background'>
            <MobileNavigation />
            <GeneralLayout>{page}</GeneralLayout>
        </RootLayout>
    );
};

export default AboutPage;
