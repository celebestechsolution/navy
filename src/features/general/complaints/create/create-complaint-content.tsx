import type { BreadcrumbItem } from '@/types/app/breadcrumb-item';

import { Header } from '@/components/header';
import { AppShell } from '@/components/shells/app-shell';
import { SimpleBreadcrumb } from '@/components/simple-breadcrumb';
import { CreateComplaintForm } from './create-complaint-form';

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
        label: 'Buat Pengaduan Baru',
        type: 'page',
    },
];

const CreateComplaintContent = () => {
    return (
        <>
            <AppShell className='bg-background-secondary'>
                <section id='create-complaint-breadcrumb'>
                    <SimpleBreadcrumb items={breadcrumbItems} />
                </section>
            </AppShell>
            <AppShell className='border-t border-border'>
                <section id='create-complaint-content' className='space-y-6'>
                    <Header>
                        <Header.Title>Buat Pengaduan Baru</Header.Title>
                        <Header.SubTitle>
                            Lengkapi data diri dan pengaduan anda dengan benar serta dapat di pertanggung jawabkan
                        </Header.SubTitle>
                    </Header>
                    <CreateComplaintForm />
                </section>
            </AppShell>
        </>
    );
};

export { CreateComplaintContent };
