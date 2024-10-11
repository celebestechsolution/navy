import Link from 'next/link';

import { ApplicationLogo } from '@/components/application-logo';
import { MobileSheet } from './mobile-sheet';

const MobileNavigation = () => {
    return (
        <header className='relative'>
            <nav className='fixed top-0 z-10 w-full border-b bg-background'>
                <div className='mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6'>
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
