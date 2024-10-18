import type { NextPageWithLayout } from '@/types/app/next-layout';

import { PermitApplicantsContent } from '@/features/general/permits/applicants/permit-applicants-content';

import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { RootLayout } from '@/layouts/root-layout';

const PermitApplicants: NextPageWithLayout = () => {
    return <PermitApplicantsContent />;
};

PermitApplicants.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Jumlah Pemohon Izin' className='bg-background'>
            <MobileNavigation />
            <GeneralLayout>{page}</GeneralLayout>
        </RootLayout>
    );
};

export default PermitApplicants;
