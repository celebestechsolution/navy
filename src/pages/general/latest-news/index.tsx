import type { NextPageWithLayout } from '@/types/app/next-layout';

import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { RootLayout } from '@/layouts/root-layout';

const LatestNews: NextPageWithLayout = () => {
    return <div>LatestNews</div>;
};

LatestNews.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Berita Terkini' className='bg-background'>
            <MobileNavigation />
            <GeneralLayout>{page}</GeneralLayout>
        </RootLayout>
    );
};

export default LatestNews;
