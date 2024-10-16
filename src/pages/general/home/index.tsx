import type { NextPageWithLayout } from '@/types/app/next-layout';

import { HomeContent } from '@/features/general/home/home-content';

import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { RootLayout } from '@/layouts/root-layout';

const Home: NextPageWithLayout = () => {
    return <HomeContent />;
};

Home.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout>
            <MobileNavigation />
            <GeneralLayout>{page}</GeneralLayout>
        </RootLayout>
    );
};

export default Home;
