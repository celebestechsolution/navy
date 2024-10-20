import type { NextPageWithLayout } from '@/types/app/next-layout';

import { LoginContent } from '@/features/guest/login/login-content';

import { GuestNavigation } from '@/layouts/guest-navigation';
import { RootLayout } from '@/layouts/root-layout';

const LoginPage: NextPageWithLayout = () => {
    return <LoginContent />;
};

LoginPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='login' className='bg-background'>
            <GuestNavigation />
            {page}
        </RootLayout>
    );
};

export default LoginPage;
