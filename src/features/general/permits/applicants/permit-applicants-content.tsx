import Link from 'next/link';

import { AppShell } from '@/components/shells/app-shell';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

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
                </section>
            </AppShell>
        </>
    );
};

export { PermitApplicantsContent };
