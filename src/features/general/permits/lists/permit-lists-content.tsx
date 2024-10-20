import type { BreadcrumbItem } from '@/types/app/breadcrumb-item';

import { AppShell } from '@/components/shells/app-shell';

import { Header } from '@/components/header';
import { SimpleBreadcrumb } from '@/components/simple-breadcrumb';
import { PermitListsItem } from './permit-lists-item';

const breadcrumbItems: BreadcrumbItem[] = [
    {
        label: 'Beranda',
        type: 'link',
        href: '/',
    },
    {
        label: 'Perizinan',
        type: 'link',
        href: '/permits',
    },
    {
        label: 'Daftar Izin Proses',
        type: 'page',
    },
];

const PermitListsContent = () => {
    return (
        <>
            <AppShell className='bg-background-secondary'>
                <section id='permit-lists-breadcrumb'>
                    <SimpleBreadcrumb items={breadcrumbItems} />
                </section>
            </AppShell>
            <AppShell className='border-t border-border'>
                <section id='permit-lists-content' className='space-y-6'>
                    <Header>
                        <Header.Title>Daftar Izin Proses</Header.Title>
                    </Header>
                    <PermitListsItem />
                </section>
            </AppShell>
        </>
    );
};

export { PermitListsContent };
