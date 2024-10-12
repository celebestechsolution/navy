import { type UrlObject } from 'url';

type Innovation = {
    image: {
        alt: string;
        src: string;
    };
    href: UrlObject | string;
    title: string;
    sub_title: string;
    description: string;
};

const innovationsLists: Innovation[] = [
    {
        image: {
            src: '/images/siap-boss-logo.png',
            alt: 'Siap Boss Logo',
        },
        href: '/innovations/siap-boss',
        title: 'SIAP BOSS',
        sub_title: 'Sistem Informasi dan Aplikasi Perizinan Berbasis Online Single Submission',
        description:
            'Dinas Penanaman Modal dan PTSP Kabupaten Pinrang telah mengembangkan SIAP BOSS, sebuah sistem layanan online berbasis OSS (Online Single Submission) untuk memudahkan proses permohonan perizinan dan non-perizinan. Sistem ini telah diintegrasikan dengan Badan Siber dan Sandi Negara (BSSN) melalui Balai Sertifikasi Elektronik (BSrE) untuk menerapkan Tanda Tangan Elektronik (TTE) pada dokumen perizinan. Hal ini dilakukan untuk meningkatkan efisiensi dan keamanan dalam pengelolaan perizinan di Kabupaten Pinrang.',
    },
    {
        image: {
            src: '/images/rajin-logo.png',
            alt: 'Rajin Logo',
        },
        href: '/innovations/rajin',
        title: 'RAJIN',
        sub_title: 'Gerai Perizinan',
        description:
            'Gerai Perizinan disingkat RAJIN merupakan inovasi pelayanan perizinan hingga kantor Kelurahan dan Desa yang terintegrasi dengan SIAP BOSS yang terbentuk berdasarkan SK Kadis DPMPTSP No. 503/15/SK/DPMPTSP/2019 dan Peraturan Bupati No. 17 Tahun 2020.',
    },
    {
        image: {
            src: '/images/paksi-logo.png',
            alt: 'Paksi Logo',
        },
        href: '/innovations/paksi',
        title: 'PAKSI',
        sub_title: 'Paket Kebijakan Investasi',
        description:
            'PAKSI lahir karena melihat potensi dan peluang investasi di Kabupaten Pinrang sangat potensial sehingga perlu dilakukan upaya percepatan memperkenalkan Kabupaten Pinrang kepada Penanam modal dan untuk meningkatkan daya saing dalam kegiatan investasi. Hal ini sesuai dengan Keputusan Bupati Pinrang Nomor 503/247/2011 tanggal 13 Desember 2011 tentang Paķet Kebijakan Investasi Kabupaten Pinrang (PaKSI)',
    },
    {
        image: {
            src: '/images/jabat-erat-logo.png',
            alt: 'Jabat Erat Logo',
        },
        href: '/innovations/jabat-erat',
        title: 'Jabat Erat',
        sub_title: 'Kerjasama Pembinaan dan Bantuan Ekonomi Berkelanjutan',
        description:
            'JABAT ERAT Merupakan inovasi yang memfasilitasi pelaku usaha mulai dari perizinan usaha, peningkatan kualitas produk, fasilitasi bantuan permodalan dan fasilitasi pemasaran produk.',
    },
];

export { innovationsLists };
