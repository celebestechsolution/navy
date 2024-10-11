import Link from 'next/link';

import { ApplicationLogo } from '@/components/application-logo';
import { MobileSheet } from './mobile-sheet';

const MobileNavigation = () => {
    return (
        <header className='relative'>
            <nav className='fixed top-0 z-10 mx-auto w-full max-w-screen-md border-b bg-background'>
                <div className='flex h-16 items-center justify-between px-4 sm:px-6'>
                    <Link href='/'>
                        <span className='sr-only'>DPMPTSP Logo</span>
                        <ApplicationLogo className='h-8 w-auto' />
                    </Link>
                    <div>
                        <MobileSheet />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export { MobileNavigation };
