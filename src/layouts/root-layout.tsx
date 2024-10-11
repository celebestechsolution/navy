import { MobileNavigation } from './mobile-navigation';

interface RootLayoutProps {
    children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <div className='relative flex min-h-dvh flex-col bg-background'>
            <MobileNavigation />
            {children}
        </div>
    );
};

export { RootLayout };
