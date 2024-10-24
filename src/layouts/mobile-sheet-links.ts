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
    guard: 'auth' | 'general';
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
                guard: 'general',
                label: 'Beranda',
                href: '/',
                use: 'icon',
                icon: 'IconHome',
            },
            {
                guard: 'general',
                label: 'Berita Terkini',
                href: '/latest-news',
                use: 'icon',
                icon: 'IconNews',
            },
        ],
    },
    {
        label: 'Inovasi',
        links: [
            {
                guard: 'general',
                label: 'SIAP BOSS',
                href: '/innovations/siap-boss',
                use: 'image',
                image: '/images/siap-boss-logo.png',
            },
            {
                guard: 'general',
                label: 'KONGSI',
                href: '/innovations/kongsi',
                use: 'image',
                image: '/images/kongsi-logo.png',
            },
            {
                guard: 'general',
                label: 'RAJIN',
                href: '/innovations/rajin',
                use: 'image',
                image: '/images/rajin-logo.png',
            },
            {
                guard: 'general',
                label: 'PAKSI',
                href: '/innovations/paksi',
                use: 'image',
                image: '/images/paksi-logo.png',
            },
            {
                guard: 'general',
                label: 'PROSPEKTUS',
                href: '/innovations/prospektus',
                use: 'image',
                image: '/images/prospektus-logo.png',
            },
            {
                guard: 'general',
                label: 'JABAT ERAT',
                href: '/innovations/jabat-erat',
                use: 'image',
                image: '/images/jabat-erat-logo.png',
            },
        ],
    },
    {
        label: 'Perizinan',
        links: [
            {
                guard: 'general',
                label: 'Daftar Izin Proses',
                href: '/permits/lists',
                use: 'icon',
                icon: 'IconClipboardList',
            },
            {
                guard: 'general',
                label: 'Daftar Jenis Izin',
                href: '/permits/types',
                use: 'icon',
                icon: 'IconFileDigit',
            },
            {
                guard: 'general',
                label: 'Jumlah Pemohon Izin',
                href: '/permits/applicants',
                use: 'icon',
                icon: 'IconFileDiff',
            },
            {
                guard: 'general',
                label: 'Standar Pelayanan Perizinan',
                href: '/permits/service-standards',
                use: 'icon',
                icon: 'IconFileLambda',
            },
        ],
    },
    {
        label: 'Pengaduan',
        links: [
            {
                guard: 'general',
                label: 'Daftar Pengaduan',
                href: '/complaints/lists',
                use: 'icon',
                icon: 'IconClipboardText',
            },
            {
                guard: 'general',
                label: 'Kategori Pengaduan & Dasar Hukum',
                href: '/complaints/categories',
                use: 'icon',
                icon: 'IconFileText',
            },
            {
                guard: 'auth',
                label: 'Buat Pengaduan Baru',
                href: '/complaints/create',
                use: 'icon',
                icon: 'IconClipboardPlus',
            },
            {
                guard: 'auth',
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
                guard: 'general',
                label: 'Profil DPMPTSP',
                href: '/about/profile',
                use: 'icon',
                icon: 'IconBuildingBank',
            },
            {
                guard: 'general',
                label: 'Tugas Pokok & Fungsi',
                href: '/about/duties',
                use: 'icon',
                icon: 'IconBooks',
            },
            {
                guard: 'general',
                label: 'Penghargaan',
                href: '/about/awards',
                use: 'icon',
                icon: 'IconFileCertificate',
            },
        ],
    },
];

export { menus, type DefaultLink, type Menu };
