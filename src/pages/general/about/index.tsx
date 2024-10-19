import type { NextPageWithLayout } from '@/types/app/next-layout';

import { GeneralLayout } from '@/layouts/general-layout';
import { MobileSheet } from '@/layouts/mobile-sheet';
import { RootLayout } from '@/layouts/root-layout';

const AboutPage: NextPageWithLayout = () => {
    return <div>AboutPage</div>;
};

AboutPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Tentang DPMPTSP' className='bg-background'>
            <MobileSheet />
            <GeneralLayout>{page}</GeneralLayout>
        </RootLayout>
    );
};

export default AboutPage;
