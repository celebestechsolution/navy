import type { BreadcrumbItem } from '@/types/app/breadcrumb-item';

import { useFetchPermitApplicants } from '@/api/queries/fetch-permit-applicants';

import { FetchErrorBlock } from '@/components/blocks/fetch-error-block';
import { Header } from '@/components/header';
import { AppShell } from '@/components/shells/app-shell';
import { SimpleBreadcrumb } from '@/components/simple-breadcrumb';

import { PermitApplicantsBlock } from './permit-applicants-block';
import { PermitApplicantsSkeleton } from './permit-applicants-skeleton';

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
    const { data: applicants, status } = useFetchPermitApplicants();

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
                        {status === 'pending' && <PermitApplicantsSkeleton />}

                        {status === 'success' &&
                            applicants.map((item, i) => <PermitApplicantsBlock key={item.id} index={i} item={item} />)}

                        {status === 'error' && <FetchErrorBlock />}
                    </div>
                </section>
            </AppShell>
        </>
    );
};

export { PermitApplicantsContent };
