import { Header } from '@/components/header';
import { AppShell } from '@/components/shells/app-shell';
import { BreadcrumbItem, SimpleBreadcrumb } from '@/components/simple-breadcrumb';

const breadcrumbItems: BreadcrumbItem[] = [
    {
        label: 'Beranda',
        type: 'link',
        href: '/',
    },
    {
        label: 'Tentang DPMPTSP',
        type: 'link',
        href: '/about',
    },
    {
        label: 'Tugas Pokok & Fungsi',
        type: 'page',
    },
];

const AboutDutiesContent = () => {
    return (
        <>
            <AppShell className='bg-background-secondary'>
                <section id='about-duties-breadcrumb'>
                    <SimpleBreadcrumb items={breadcrumbItems} />
                </section>
            </AppShell>
            <AppShell className='border-t border-border'>
                <section id='about-duties-content' className='space-y-6'>
                    <Header>
                        <Header.Title>Tugas Pokok & Fungsi</Header.Title>
                    </Header>
                    <article className='text-sm'>
                        <p className='leading-7 [&:not(:first-child)]:mt-6'>
                            Berdasarkan Peraturan Bupati Pinrang Nomor 48 Tahun 2016 tentang Kedudukan, Susunan
                            Organisasi, Tugas dan Fungsi serta Tata Kerja Dinas Penanaman Modal dan Pelayanan Terpadu
                            Satu Pintu Kabupaten Pinrang, DPMPTSP Kabupaten Pinrang mempunyai tugas pokok melakukan
                            koordinasi, integrasi, sinkronisasi dan simplifikasi serta mempunyai tugas koordinasi daerah
                            dan pelayanan di bidang penanaman modal.
                        </p>
                        <p className='leading-7 [&:not(:first-child)]:mt-6'>
                            Dalam melaksanakan tugas pokok, DPMPTSP Kabupaten Pinrang menyelenggarakan fungsi sebagai
                            berikut
                        </p>
                        <ul className='ml-6 mt-6 list-disc [&>li]:mt-2'>
                            <li>
                                Perumusan kebijakan urusan pemerintahan Bidang Penanaman Modal dan Pelayanan Terpadu
                                Satu Pintu
                            </li>
                            <li>
                                Pelaksanaan kebijakan urusan pemerintahan Bidang Penanaman Modal dan Pelayanan Terpadu
                                Satu Pintu
                            </li>
                            <li>
                                Pelaksanaaan, monitoring, evaluasi dan pelaporan urusan pemerintahan Bidang Penanaman
                                Modal dan Pelayanan Terpadu Satu Pintu
                            </li>
                            <li>Pelaksanaan administrasi Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu</li>
                            <li>
                                Penyelenggaraan fungsi lain yang diberikan oleh Bupati sesuai dengan tugas dan fungsinya
                            </li>
                        </ul>
                    </article>
                </section>
            </AppShell>
        </>
    );
};

export { AboutDutiesContent };
