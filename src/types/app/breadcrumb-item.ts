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
