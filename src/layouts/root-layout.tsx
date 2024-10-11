import Head from 'next/head';

import { Toaster } from '@/components/ui/toaster';
import { DetectDeviceLayout } from './detect-device-layout';

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
            <DetectDeviceLayout>
                <div className='bg-background-secondary relative flex min-h-dvh flex-col'>{children}</div>

                <Toaster />
            </DetectDeviceLayout>
        </>
    );
};

export { RootLayout };
