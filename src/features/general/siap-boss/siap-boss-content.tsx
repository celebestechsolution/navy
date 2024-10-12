import Image from 'next/image';

import siapBossLogo from '../../../../public/images/siap-boss-logo.png';

const SiapBossContent = () => {
    return (
        <>
            <h1 className='text-2xl font-bold text-primary'>SIAP BOSS</h1>
            <div className='my-5 flex items-center justify-center'>
                <Image className='aspect-square size-52' src={siapBossLogo} alt='Siap Boss Logo' />
            </div>
            <article className='space-y-5'>
                <h2 className='text-lg font-semibold text-primary'>
                    Sistem Informasi dan Aplikasi Perizinan Berbasis Online Single Submission
                </h2>
                <p className='text-sm text-muted-foreground'>
                    Berdasarkan Surat Keputusan Kepala Dinas Penanaman Modal dan PTSP Nomor 503/09/SK/DPMPTSP/2019 dan
                    dalam rangka meningkatkan pelayanan publik di bidang pelayanan perizinan dan non perizinan di
                    Kabupaten Pinrang melalui Sistem Informasi dan Aplikasi Perizinan Berbasis Online Single Submission
                    &#40;SIAP BOSS&#41;
                </p>
                <p className='text-sm text-muted-foreground'>
                    DPMPTSP Kabupaten Pinrang melalui Bidang Pengolahan Data dan Sistem Informasi telah mengembangkan
                    dan melakukan integrasi Portal Aplikasi yang dapat melakukan dan menelusuri proses permohonan
                    perizinan dan non perizinan yang dilakukan di DPMPTSP Kabupaten Pinrang. Dengan menerapkan konsep
                    Integrated System DPMPTSP Pinrang dalam SIAP BOSS telah bekerjasama dengan Badan Siber dan Sandi
                    Negara &#40;BSSN&#41; Republik Indonesia melalui Balai Sertifikasi Elektronik &#40;BSrE&#41; dalam
                    penerapan Tanda Tangan Elektronik &#40;TTE&#41; pada dokumen Perizinan yang di terbitkan oleh
                    DPMPTSP Pinrang.
                </p>
            </article>
        </>
    );
};

export { SiapBossContent };
