import { cn } from '@/lib/utils';

const Header = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={cn('flex w-full flex-col', className)} {...props}>
            {children}
        </div>
    );
};

const HeaderTitle = ({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h1 className={cn('text-lg font-bold text-primary', className)} {...props}>
            {children}
        </h1>
    );
};

const HeaderSubTitle = ({ children, className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
    return (
        <p className={cn('text-sm text-muted-foreground', className)} {...props}>
            {children}
        </p>
    );
};

Header.Title = HeaderTitle;
Header.SubTitle = HeaderSubTitle;

export { Header };
