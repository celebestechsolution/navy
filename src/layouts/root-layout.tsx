import Head from 'next/head';

import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { DetectDeviceLayout } from './detect-device-layout';

interface RootLayoutProps {
    children: React.ReactNode;
    title?: string;
    className?: string;
}

const RootLayout = ({ children, title, className }: RootLayoutProps) => {
    const appName = process.env.NEXT_PUBLIC_APP_NAME;

    return (
        <>
            <Head>
                <title>{title ? `${title} / ${appName}` : `${appName}`}</title>
            </Head>
            <DetectDeviceLayout>
                <div className={cn('relative flex min-h-dvh flex-col bg-background-secondary', className)}>
                    {children}
                </div>

                <Toaster />
            </DetectDeviceLayout>
        </>
    );
};

export { RootLayout };
