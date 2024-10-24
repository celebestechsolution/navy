import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { NextPageWithLayout } from '@/types/app/next-layout';

import { DetailNewsContent } from '@/features/general/latest-news/detail/detail-news-content';
import { DetectDeviceLayout } from '@/layouts/detect-device-layout';
import { GeneralLayout } from '@/layouts/general-layout';
import { MobileNavigation } from '@/layouts/mobile-navigation';
import { MobileScreenLayout } from '@/layouts/mobile-screen-layout';
import { RootLayout } from '@/layouts/root-layout';

export const getServerSideProps = (async ({ query }) => {
    return { props: { slug: query.slug as string } };
}) satisfies GetServerSideProps<{ slug: string }>;

type SingleNewsPageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const SingleNewsPage: NextPageWithLayout<SingleNewsPageProps> = ({ slug }) => {
    return <DetailNewsContent slug={slug} />;
};

SingleNewsPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <RootLayout title='Detail Berita' className='bg-background'>
            <DetectDeviceLayout>
                <MobileScreenLayout>
                    <MobileNavigation />
                    <GeneralLayout>{page}</GeneralLayout>
                </MobileScreenLayout>
            </DetectDeviceLayout>
        </RootLayout>
    );
};

export default SingleNewsPage;
