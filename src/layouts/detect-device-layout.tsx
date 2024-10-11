import * as React from 'react';

import { useRouter } from 'next/router';

import { isDesktop } from 'usemods';

interface DetectDeviceLayoutProps {
    children: React.ReactNode;
}

const DetectDeviceLayout = ({ children }: DetectDeviceLayoutProps) => {
    const isProduction = process.env.NODE_ENV === 'production';

    const [isMobile, setIsMobile] = React.useState<boolean>(isProduction ? false : true);

    const router = useRouter();

    React.useEffect(() => {
        if (isProduction) {
            const userAgent = navigator.userAgent;

            if (isDesktop(userAgent)) {
                router.push('https://marionotes.com/');
            } else {
                setIsMobile(true);
            }
        }
    }, [router]);

    if (!isMobile) {
        return null;
    }

    return children;
};

export { DetectDeviceLayout };
