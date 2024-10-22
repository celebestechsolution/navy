import type { NextPageWithLayout } from '@/types/app/next-layout';

import { AuthLayout } from '@/layouts/auth-layout';
import { DetectDeviceLayout } from '@/layouts/detect-device-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { MobileScreenLayout } from '@/layouts/mobile-screen-layout';
import { RootLayout } from '@/layouts/root-layout';

const Dashboard: NextPageWithLayout = () => {
    return <div>Dashboard</div>;
};

Dashboard.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Dashboard'>
            <DetectDeviceLayout>
                <MobileScreenLayout>
                    <MobileNavigation />
                    <AuthLayout>{page}</AuthLayout>
                </MobileScreenLayout>
            </DetectDeviceLayout>
        </RootLayout>
    );
};

export default Dashboard;
