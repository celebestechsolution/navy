import type { NextPageWithLayout } from '@/types/app/next-layout';

import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { RootLayout } from '@/layouts/root-layout';

const AboutProfilePage: NextPageWithLayout = () => {
    return <div>AboutProfilePage</div>;
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
