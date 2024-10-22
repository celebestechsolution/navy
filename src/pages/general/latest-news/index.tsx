import type { NextPageWithLayout } from '@/types/app/next-layout';

import { LatestNewsContent } from '@/features/general/latest-news/latest-news-content';

import { DetectDeviceLayout } from '@/layouts/detect-device-layout';
import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { MobileScreenLayout } from '@/layouts/mobile-screen-layout';
import { RootLayout } from '@/layouts/root-layout';

const LatestNews: NextPageWithLayout = () => {
    return <LatestNewsContent />;
};

LatestNews.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Berita Terkini' className='bg-background'>
            <DetectDeviceLayout>
                <MobileScreenLayout>
                    <MobileNavigation />
                    <GeneralLayout>{page}</GeneralLayout>
                </MobileScreenLayout>
            </DetectDeviceLayout>
        </RootLayout>
    );
};

export default LatestNews;
