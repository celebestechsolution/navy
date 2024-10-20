import type { BreadcrumbItem } from '@/types/app/breadcrumb-item';

import { AppShell } from '@/components/shells/app-shell';
import { SimpleBreadcrumb } from '@/components/simple-breadcrumb';
import { Skeleton } from '@/components/ui/skeleton';

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
        label: 'Profil DPMPTSP',
        type: 'page',
    },
];

const AboutProfileContent = () => {
    return (
        <>
            <AppShell className='bg-background-secondary'>
                <section id='about-profile-breadcrumb'>
                    <SimpleBreadcrumb items={breadcrumbItems} />
                </section>
            </AppShell>
            <AppShell className='border-t border-border'>
                <section id='about-profile-content' className='space-y-6'>
                    <h1 className='text-lg font-bold text-primary'>Profil DPMPTSP</h1>
                    <div>
                        <Skeleton className='h-44 w-full rounded-xl' />
                    </div>
                    <article className='text-sm'>
                        <p className='leading-7 [&:not(:first-child)]:mt-6'>
                            Kantor Pelayanan Perizinan Terpadu &#40;KP2T&#41; Kabupaten Pinrang berdiri berdasarkan
                            Peraturan Daerah Kabupaten Pinrang Nomor 3 Tahun 2010 tentang Organisasi dan Tata Kerja
                            Kantor Pelayanan Perizinan Terpadu &#40;KP2T&#41; Kabupaten Pinrang pada tanggal 4 Juni
                            2010, Bupati Pinrang melakukan pengisian jabatan struktural dan melantik Dra. Hj. A.
                            Nurhayati Tamma, M.Si sebagai Kepala Kantor Pelayanan Perizinan Terpadu.
                        </p>
                        <p className='leading-7 [&:not(:first-child)]:mt-6'>
                            Sejak pelantikan pejabat structural, KP2T melakukan tahap persiapan untuk penyelenggaraan
                            pelayanan perizinan meliputi :
                        </p>
                        <ul className='my-6 ml-6 list-disc [&>li]:mt-2'>
                            <li>Rapat pemantapan SKPD Teknis</li>
                            <li>Studi banding ke beberapa Kabupaten/ Kota yang telah melaksanakan PPTSP</li>
                            <li>penyusunan dokumen pendukung lainnya</li>
                        </ul>
                        <p className='leading-7 [&:not(:first-child)]:mt-6'>
                            Berdasarkan Surat Keputusan Kepala Dinas Penanaman Modal dan PTSP Nomor
                            503/09/SK/DPMPTSP/2019 dan dalam rangka meningkatkan pelayanan publik di bidang pelayanan
                            perizinan dan non perizinan di Kabupaten Pinrang melalui Sistem Informasi dan Aplikasi
                            Perizinan Berbasis Online Single Submission &#40;SIAP BOSS&#41;
                        </p>
                        <p className='leading-7 [&:not(:first-child)]:mt-6'>
                            DPMPTSP Kabupaten Pinrang melalui Bidang Pengolahan Data dan Sistem Informasi telah
                            mengembangkan dan melakukan integrasi Portal Aplikasi yang dapat melakukan dan menelusuri
                            proses permohonan perizinan dan non perizinan yang dilakukan di DPMPTSP Kabupaten Pinrang.
                            Dengan menerapkan konsep Integrated System DPMPTSP Pinrang dalam SIAP BOSS telah bekerjasama
                            dengan Badan Siber dan Sandi Negara &#40;BSSN&#41; Republik Indonesia melalui Balai
                            Sertifikasi Elektronik &#40;BSrE&#41; dalam penerapan Tanda Tangan Elektronik &#40;TTE&#41;
                            pada dokumen Perizinan yang di terbitkan oleh DPMPTSP Pinrang.
                        </p>
                        <p className='leading-7 [&:not(:first-child)]:mt-6'>
                            SIAP BOSS tahun 2021 masuk dalam Top 50 Inovasi Pelayanan Publik dalam Kompetisi Inovasi
                            Pelayanan Publik Tingkat Provinsi.
                        </p>
                        <h3 className='mt-6 scroll-m-20 text-xl font-semibold tracking-tight'>Visi</h3>
                        <blockquote className='my-6 border-l-2 pl-6 italic'>
                            “Terwujudnya Masyarakat Kabupaten Pinrang yang Sejahtra, Religius, Harmonis, Mandiri dan
                            Tangguh Mengelola Potensi Daerah”
                        </blockquote>
                        <h3 className='scroll-m-20 text-xl font-semibold tracking-tight'>Misi</h3>
                        <ul className='my-6 ml-6 list-decimal [&>li]:mt-2'>
                            <li>
                                Memantapkan Sistem Birokrasi yang baik dan Akuntabel, Beroirentasi pelayan prima yang
                                didukung dengan Teknologi Informasi dan Komunikasi &#40;E-Governance&#41;
                            </li>
                            <li>Pemberdayaan masyarakat dalam meningkatkan kesejahtraan secara berkelanjutan</li>
                        </ul>
                    </article>
                </section>
            </AppShell>
        </>
    );
};

export { AboutProfileContent };
