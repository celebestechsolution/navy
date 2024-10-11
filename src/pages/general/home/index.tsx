import type { NextPageWithLayout } from '@/types/app/next-layout';

import { ThemeSwitcher } from '@/components/theme-switcher';
import { Button } from '@/components/ui/button';

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
    return <>{page}</>;
};

export default Home;
