import { type UrlObject } from 'url';

import type { TablerIconName } from '@/types/app/tabler-icon';

interface LinkUseImage {
    use: 'image';
    image: string;
}

interface LinkUseIcon {
    use: 'icon';
    icon: TablerIconName;
}

type DefaultLink = {
    label: string;
    href: UrlObject | string;
} & (LinkUseIcon | LinkUseImage);

interface Menu {
    label: string;
    links: DefaultLink[];
}

const menus: Menu[] = [
    {
        label: 'Umum',
        links: [
            {
                label: 'Beranda',
                href: '/',
                use: 'icon',
                icon: 'IconHome',
            },
            {
                label: 'Berita Terkini',
                href: '/latest-news',
                use: 'icon',
                icon: 'IconNews',
            },
        ],
    },
    {
        label: 'Perizinan',
        links: [
            {
                label: 'Daftar Izin Proses',
                href: '/permits/lists',
                use: 'icon',
                icon: 'IconClipboardList',
            },
            {
                label: 'Daftar Jenis Izin',
                href: '/permits/types',
                use: 'icon',
                icon: 'IconFileDigit',
            },
            {
                label: 'Jumlah Pemohon Izin',
                href: '/permits/applicants',
                use: 'icon',
                icon: 'IconFileDiff',
            },
            {
                label: 'Standar Pelayanan Perizinan',
                href: '/permits/service-standards',
                use: 'icon',
                icon: 'IconFileLambda',
            },
        ],
    },
    {
        label: 'Inovasi',
        links: [
            {
                label: 'SIAP BOSS',
                href: '/innovations/siap-boss',
                use: 'image',
                image: '/images/siap-boss-logo.png',
            },
            {
                label: 'Rajin',
                href: '/innovations/rajin',
                use: 'image',
                image: '/images/rajin-logo.png',
            },
            {
                label: 'Paksi',
                href: '/innovations/paksi',
                use: 'image',
                image: '/images/paksi-logo.png',
            },
            {
                label: 'Jabat Erat',
                href: '/innovations/jabat-erat',
                use: 'image',
                image: '/images/jabat-erat-logo.png',
            },
        ],
    },
    {
        label: 'Pengaduan',
        links: [
            {
                label: 'Daftar Pengaduan',
                href: '/complaints/lists',
                use: 'icon',
                icon: 'IconClipboardText',
            },
            {
                label: 'Kategori Pengaduan & Dasar Hukum',
                href: '/complaints/categories',
                use: 'icon',
                icon: 'IconFileText',
            },
            {
                label: 'Buat Pengaduan Baru',
                href: '/complaints/create',
                use: 'icon',
                icon: 'IconClipboardPlus',
            },
            {
                label: 'Pengaduan Saya',
                href: '/dashboard',
                use: 'icon',
                icon: 'IconFileReport',
            },
        ],
    },
    {
        label: 'Tentang DPMPTSP',
        links: [
            {
                label: 'Profil DPMPTSP',
                href: '/about/profile',
                use: 'icon',
                icon: 'IconBuildingBank',
            },
            {
                label: 'Tugas Pokok & Fungsi',
                href: '/about/duties',
                use: 'icon',
                icon: 'IconBooks',
            },
            {
                label: 'Penghargaan',
                href: '/about/awards',
                use: 'icon',
                icon: 'IconFileCertificate',
            },
        ],
    },
];

export { menus, type DefaultLink, type Menu };
