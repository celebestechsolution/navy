import Link from 'next/link';

import { ApplicationLogo } from '@/components/application-logo';

const GuestNavigation = () => {
    return (
        <header>
            <nav className='w-full border-b bg-background'>
                <div className='flex h-16 items-center justify-center px-4 sm:px-6'>
                    <Link href='/'>
                        <span className='sr-only'>DPMPTSP Logo</span>
                        <ApplicationLogo className='h-7 w-auto' />
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export { GuestNavigation };
