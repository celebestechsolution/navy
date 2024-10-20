import type { NextPageWithLayout } from '@/types/app/next-layout';

import { LatestNewsContent } from '@/features/general/latest-news/latest-news-content';

import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { RootLayout } from '@/layouts/root-layout';

const LatestNews: NextPageWithLayout = () => {
    return <LatestNewsContent />;
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
