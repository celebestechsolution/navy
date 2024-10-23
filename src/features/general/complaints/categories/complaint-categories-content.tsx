import type { BreadcrumbItem } from '@/types/app/breadcrumb-item';

import { useFetchComplaintCategories } from '@/api/queries/fetch-complaint-categories';

import { FetchErrorBlock } from '@/components/blocks/fetch-error-block';
import { Header } from '@/components/header';
import { AppShell } from '@/components/shells/app-shell';
import { SimpleBreadcrumb } from '@/components/simple-breadcrumb';

import { PageVersion } from '@/components/page-version';
import { ComplaintCategoriesBlock } from './complaint-categories-block';
import { ComplaintCategoriesSkeleton } from './complaint-categories-skeleton';

const breadcrumbItems: BreadcrumbItem[] = [
    {
        label: 'Beranda',
        type: 'link',
        href: '/',
    },
    {
        label: 'Pengaduan',
        type: 'link',
        href: '/complaints',
    },
    {
        label: 'Kategori Pengaduan & Dasar Hukum',
        type: 'page',
    },
];

const ComplaintCategoriesContent = () => {
    const { data: categories, status } = useFetchComplaintCategories();

    return (
        <>
            <AppShell className='bg-background-secondary'>
                <section id='complaint-categories-breadcrumb' className=''>
                    <SimpleBreadcrumb items={breadcrumbItems} />
                </section>
            </AppShell>
            <AppShell className='relative border-t border-border'>
                <section id='complaint-categories-content' className='space-y-6'>
                    <Header>
                        <Header.Title>Kategori Pengaduan</Header.Title>
                    </Header>
                    <div className='flex flex-col space-y-4'>
                        {status === 'pending' && <ComplaintCategoriesSkeleton />}

                        {status === 'success' &&
                            categories.map((item) => <ComplaintCategoriesBlock key={item.id} item={item} />)}

                        {status === 'error' && <FetchErrorBlock />}
                    </div>
                </section>

                <PageVersion label={2} />
            </AppShell>
        </>
    );
};

export { ComplaintCategoriesContent };
