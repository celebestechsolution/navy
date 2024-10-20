import * as React from 'react';

import Link from 'next/link';

import { cn } from '@/lib/utils';

import type { BreadcrumbItem as BreadcrumbItemType } from '@/types/app/breadcrumb-item';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

type SimpleBreadcrumbProps = {
    items: BreadcrumbItemType[];
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
