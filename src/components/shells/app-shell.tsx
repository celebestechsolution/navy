import { cn } from '@/lib/utils';

const AppShell = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={cn('px-4 py-4', className)} {...props}>
            {children}
        </div>
    );
};

export { AppShell };
