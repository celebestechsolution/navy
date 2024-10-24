import type { NextPageWithLayout } from '@/types/app/next-layout';

import { PaksiContent } from '@/features/general/innovations/paksi/paksi-content';

import { DetectDeviceLayout } from '@/layouts/detect-device-layout';
import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { MobileScreenLayout } from '@/layouts/mobile-screen-layout';
import { RootLayout } from '@/layouts/root-layout';

const PaksiPage: NextPageWithLayout = () => {
    return <PaksiContent />;
};

PaksiPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Paksi' className='bg-background'>
            <DetectDeviceLayout>
                <MobileScreenLayout>
                    <MobileNavigation />
                    <GeneralLayout>{page}</GeneralLayout>
                </MobileScreenLayout>
            </DetectDeviceLayout>
        </RootLayout>
    );
};

export default PaksiPage;
