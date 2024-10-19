import * as React from 'react';

import Link from 'next/link';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { cn } from '@/lib/utils';

type BreadcrumbPage = {
    type: 'page';
};

type BreadcrumbLink = {
    type: 'link';
    href: string;
};

export type BreadcrumbItem = {
    label: string;
} & (BreadcrumbLink | BreadcrumbPage);

type SimpleBreadcrumbProps = {
    items: BreadcrumbItem[];
    className?: string;
};

const SimpleBreadcrumb = ({ items, className }: SimpleBreadcrumbProps) => {
    return (
        <Breadcrumb>
            <BreadcrumbList className={cn('flex-nowrap overflow-hidden truncate', className)}>
                {items.map((item, i) => (
                    <React.Fragment key={i}>
                        <BreadcrumbItem>
                            {item.type === 'link' ? (
                                <BreadcrumbLink asChild>
                                    <Link href={item.href}>{item.label}</Link>
                                </BreadcrumbLink>
                            ) : (
                                <BreadcrumbPage>{item.label}</BreadcrumbPage>
                            )}
                        </BreadcrumbItem>
                        {item.type === 'link' && <BreadcrumbSeparator />}
                    </React.Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
};

export { SimpleBreadcrumb };
