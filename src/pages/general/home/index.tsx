import type { NextPageWithLayout } from '@/types/app/next-layout';

import { ThemeSwitcher } from '@/components/theme-switcher';
import { Button } from '@/components/ui/button';
import { GeneralLayout } from '@/layouts/general-layout';
import { RootLayout } from '@/layouts/root-layout';

const Home: NextPageWithLayout = () => {
    return (
        <div className='flex flex-col'>
            Home
            <Button>Button</Button>
            <ThemeSwitcher />
        </div>
    );
};

Home.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout>
            <GeneralLayout>{page}</GeneralLayout>
        </RootLayout>
    );
};

export default Home;
