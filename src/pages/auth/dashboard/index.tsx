import type { NextPageWithLayout } from '@/types/app/next-layout';

import { AuthLayout } from '@/layouts/auth-layout';
import { RootLayout } from '@/layouts/root-layout';

const Dashboard: NextPageWithLayout = () => {
    return <div>Dashboard</div>;
};

Dashboard.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout>
            <AuthLayout>{page}</AuthLayout>
        </RootLayout>
    );
};

export default Dashboard;
