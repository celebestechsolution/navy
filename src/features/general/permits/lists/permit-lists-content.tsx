import { AppShell } from '@/components/shells/app-shell';

import { Header } from '@/components/header';
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
