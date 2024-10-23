import { type UrlObject } from 'url';

import type { TablerIconName } from '@/types/app/tabler-icon';

interface Link {
    label: string;
    href: UrlObject | string;
    icon?: TablerIconName;
}

interface Menu {
    label: string;
    links: Link[];
}

const menus: Menu[] = [
    {
        label: 'Umum',
        links: [
            {
                label: 'Beranda',
                href: '/',
            },
            {
                label: 'Berita Terkini',
                href: '/latest-news',
            },
        ],
    },
    {
        label: 'Perizinan',
        links: [
            {
                label: 'Daftar Izin Proses',
                href: '/permits/lists',
                icon: 'IconClipboardList',
            },
            {
                label: 'Daftar Jenis Izin',
                href: '/permits/types',
                icon: 'IconFileDigit',
            },
            {
                label: 'Jumlah Pemohon Izin',
                href: '/permits/applicants',
                icon: 'IconFileDiff',
            },
            {
                label: 'Standar Pelayanan Perizinan',
                href: '/permits/service-standards',
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
            },
            {
                label: 'Rajin',
                href: '/innovations/rajin',
            },
            {
                label: 'Paksi',
                href: '/innovations/paksi',
            },
            {
                label: 'Jabat Erat',
                href: '/innovations/jabat-erat',
            },
        ],
    },
    {
        label: 'Pengaduan',
        links: [
            {
                label: 'Daftar Pengaduan',
                href: '/complaints/lists',
                icon: 'IconClipboardText',
            },
            {
                label: 'Kategori Pengaduan & Dasar Hukum',
                href: '/complaints/categories',
                icon: 'IconFileText',
            },
            {
                label: 'Buat Pengaduan Baru',
                href: '/complaints/create',
                icon: 'IconClipboardPlus',
            },
            {
                label: 'Pengaduan Saya',
                href: '/dashboard',
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
                icon: 'IconBuildingBank',
            },
            {
                label: 'Tugas Pokok & Fungsi',
                href: '/about/duties',
                icon: 'IconBooks',
            },
            {
                label: 'Penghargaan',
                href: '/about/awards',
                icon: 'IconFileCertificate',
            },
        ],
    },
];

export { menus, type Link, type Menu };
