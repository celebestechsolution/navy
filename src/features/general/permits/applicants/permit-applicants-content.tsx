import Link from 'next/link';

import { cn } from '@/lib/utils';
import { applicants } from './permit-applicants-data';

import { AppShell } from '@/components/shells/app-shell';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const PermitApplicantsContent = () => {
    return (
        <>
            <AppShell className='bg-background-secondary'>
                <section id='permit-applicants-breadcrumb'>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href='/'>Beranda</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href='/permits'>Perizinan</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Jumlah Pemohon Izin</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </section>
            </AppShell>
            <AppShell className='border-t border-border'>
                <section id='permit-applicants-content' className='space-y-6'>
                    <h1 className='text-lg font-bold text-primary'>Jumlah Pemohon Izin</h1>
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
