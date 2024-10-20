import { cn } from '@/lib/utils';

const NewsBlock = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={cn('flex items-center gap-2', className)} {...props}>
            {children}
        </div>
    );
};

const NewsBlockImage = ({ className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
    return (
        <img
            className={cn('aspect-square size-[5.438rem] rounded-2xl border object-cover object-center', className)}
            width={100}
            height={100}
            {...props}
        />
    );
};

const NewsBlockBody = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return <div className={cn('flex flex-col gap-1.5', className)}>{children}</div>;
};

const NewsBlockTitle = ({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    return <h3 className={cn('line-clamp-2 text-base font-semibold text-primary', className)}>{children}</h3>;
};

const NewsBlockSubTitle = ({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
    return <p className={cn('text-sm font-normal text-green-600', className)}>{children}</p>;
};

NewsBlock.Image = NewsBlockImage;
NewsBlock.Body = NewsBlockBody;
NewsBlock.Title = NewsBlockTitle;
NewsBlock.SubTitle = NewsBlockSubTitle;

export { NewsBlock };
