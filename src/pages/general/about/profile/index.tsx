import type { NextPageWithLayout } from '@/types/app/next-layout';

import { AboutProfileContent } from '@/features/general/about/profile/about-profile-content';

import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { RootLayout } from '@/layouts/root-layout';

const AboutProfilePage: NextPageWithLayout = () => {
    return <AboutProfileContent />;
};

AboutProfilePage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Profil DPMPTSP' className='bg-background'>
            <MobileNavigation />
            <GeneralLayout>{page}</GeneralLayout>
        </RootLayout>
    );
};

export default AboutProfilePage;
