import type { BreadcrumbItem } from '@/types/app/breadcrumb-item';

import { cn } from '@/lib/utils';
import { applicants } from './permit-applicants-data';

import { Header } from '@/components/header';
import { AppShell } from '@/components/shells/app-shell';
import { SimpleBreadcrumb } from '@/components/simple-breadcrumb';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

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
        label: 'Jumlah Pemohon Izin',
        type: 'page',
    },
];

const PermitApplicantsContent = () => {
    return (
        <>
            <AppShell className='bg-background-secondary'>
                <section id='permit-applicants-breadcrumb'>
                    <SimpleBreadcrumb items={breadcrumbItems} />
                </section>
            </AppShell>
            <AppShell className='border-t border-border'>
                <section id='permit-applicants-content' className='space-y-6'>
                    <Header>
                        <Header.Title>Jumlah Pemohon Izin</Header.Title>
                    </Header>
                    <div className='grid grid-cols-2 gap-2'>
                        {applicants.map((item, i) => (
                            <Card
                                key={i + item.value}
                                className={cn('space-y-2 p-4 shadow-none', i === 0 && 'col-span-full')}>
                                <CardHeader className='p-0'>
                                    <CardTitle className='text-sm font-medium text-primary'>{item.label}</CardTitle>
                                </CardHeader>
                                <CardContent className='p-0'>
                                    <div className='text-2xl font-bold text-primary'>{item.value}</div>
                                </CardContent>
                                <CardFooter className='p-0'>
                                    <p className='text-sm text-green-600'>Pemohon</p>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </section>
            </AppShell>
        </>
    );
};

export { PermitApplicantsContent };
