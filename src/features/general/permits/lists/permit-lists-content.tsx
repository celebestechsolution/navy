import type { BreadcrumbItem } from '@/types/app/breadcrumb-item';

import { useFetchPermitLists } from '@/api/queries/fetch-permit-lists';

import { Header } from '@/components/header';
import { AppShell } from '@/components/shells/app-shell';
import { SimpleBreadcrumb } from '@/components/simple-breadcrumb';
import { TablerIcon } from '@/components/tabler-icon';
import { Accordion } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { PermitListsBlock } from './permit-lists-block';
import { PermitListsSkeleton } from './permit-lists-skeleton';

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
    const { data: lists, status } = useFetchPermitLists();

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
                    {status === 'pending' && <PermitListsSkeleton />}
                    {status === 'success' && lists.length > 0 && (
                        <Accordion type='single' collapsible className='w-full space-y-4'>
                            {lists.map((list) => (
                                <PermitListsBlock key={list.id} item={list} />
                            ))}
                        </Accordion>
                    )}
                    {status === 'error' && (
                        <Card className='shadow-none'>
                            <CardContent className='flex flex-col items-center justify-center p-4'>
                                <TablerIcon name='IconMoodSad' className='size-10 stroke-destructive stroke-2' />
                                <p className='text-center text-sm text-muted-foreground'>
                                    Ada kesalahan dalam mengakses data, coba lagi beberapa saat.
                                </p>
                            </CardContent>
                        </Card>
                    )}
                </section>
            </AppShell>
        </>
    );
};

export { PermitListsContent };
