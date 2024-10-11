import Head from 'next/head';

import { Toaster } from '@/components/ui/toaster';

interface RootLayoutProps {
    children: React.ReactNode;
    title?: string;
}

const RootLayout = ({ children, title }: RootLayoutProps) => {
    const appName = process.env.NEXT_PUBLIC_APP_NAME;

    return (
        <>
            <Head>
                <title>{title ? `${title} / ${appName}` : `${appName}`}</title>
            </Head>

            <div className='bg-background-secondary relative flex min-h-dvh flex-col'>{children}</div>

            <Toaster />
        </>
    );
};

export { RootLayout };
