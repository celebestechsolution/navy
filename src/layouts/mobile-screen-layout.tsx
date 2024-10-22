import { cn } from '@/lib/utils';

interface MobileScreenLayoutProps {
    children: React.ReactNode;
    className?: string;
}

const MobileScreenLayout = ({ children, className }: MobileScreenLayoutProps) => {
    return <div className={cn('mx-auto max-w-screen-md', className)}>{children}</div>;
};

export { MobileScreenLayout };
