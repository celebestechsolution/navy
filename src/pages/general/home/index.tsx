import type { NextPageWithLayout } from '@/types/app/next-layout';

import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { RootLayout } from '@/layouts/root-layout';

const Home: NextPageWithLayout = () => {
    return (
        <div className='flex flex-col'>
            <h1>Home</h1>
        </div>
    );
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
