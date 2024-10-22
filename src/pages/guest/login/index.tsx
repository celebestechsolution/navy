import type { NextPageWithLayout } from '@/types/app/next-layout';

import { LoginContent } from '@/features/guest/login/login-content';

import { DetectDeviceLayout } from '@/layouts/detect-device-layout';
import { GuestNavigation } from '@/layouts/guest-navigation';
import { MobileScreenLayout } from '@/layouts/mobile-screen-layout';
import { RootLayout } from '@/layouts/root-layout';

const LoginPage: NextPageWithLayout = () => {
    return <LoginContent />;
};

LoginPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='login' className='bg-background'>
            <DetectDeviceLayout>
                <MobileScreenLayout>
                    <GuestNavigation />
                    {page}
                </MobileScreenLayout>
            </DetectDeviceLayout>
        </RootLayout>
    );
};

export default LoginPage;
