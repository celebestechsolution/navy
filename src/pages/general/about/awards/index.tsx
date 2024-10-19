import type { NextPageWithLayout } from '@/types/app/next-layout';

import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { RootLayout } from '@/layouts/root-layout';

const AboutAwardsPage: NextPageWithLayout = () => {
    return <div>AboutAwardsPage</div>;
};

AboutAwardsPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Penghargaan' className='bg-background'>
            <MobileNavigation />
            <GeneralLayout>{page}</GeneralLayout>
        </RootLayout>
    );
};

export default AboutAwardsPage;
