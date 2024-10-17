import { AppShell } from '@/components/shells/app-shell';

import { PermitListsBreadcrumb } from './permit-lists-breadcrumb';
import { PermitListsItem } from './permit-lists-item';

const PermitListsContent = () => {
    return (
        <>
            <AppShell className='bg-background-secondary'>
                <section id='permit-lists-breadcrumb'>
                    <PermitListsBreadcrumb />
                </section>
            </AppShell>
            <AppShell className='border-t border-border'>
                <section id='permit-lists-content' className='space-y-6'>
                    <h1 className='text-lg font-bold text-primary'>Daftar Izin Proses</h1>
                    <PermitListsItem />
                </section>
            </AppShell>
        </>
    );
};

export { PermitListsContent };
