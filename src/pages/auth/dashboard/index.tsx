import type { NextPageWithLayout } from '@/types/app/next-layout';

import { AuthLayout } from '@/layouts/auth-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { RootLayout } from '@/layouts/root-layout';

const Dashboard: NextPageWithLayout = () => {
    return <div>Dashboard</div>;
};

Dashboard.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout>
            <MobileNavigation />
            <AuthLayout>{page}</AuthLayout>
        </RootLayout>
    );
};

export default Dashboard;
