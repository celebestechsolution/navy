import { type UrlObject } from 'url';

interface Link {
    label: string;
    href: UrlObject | string;
}

interface Menu {
    label: string;
    links: Link[];
}

const menus: Menu[] = [
    {
        label: 'General',
        links: [
            {
                label: 'Home',
                href: '/',
            },
            {
                label: 'Dashboard',
                href: '/dashboard',
            },
        ],
    },
    {
        label: 'Perizinan',
        links: [
            {
                label: 'Daftar Izin Proses',
                href: '/',
            },
            {
                label: 'Jenis Daftar Izin',
                href: '/dashboard',
            },
            {
                label: 'Jumlah Permohonan Izin',
                href: '/dashboard',
            },
            {
                label: 'Standar Pelayanan Perizinan',
                href: '/dashboard',
            },
        ],
    },
    {
        label: 'Inovasi',
        links: [
            {
                label: 'SIAP BOSS',
                href: '/',
            },
            {
                label: 'Kongsi',
                href: '/dashboard',
            },
            {
                label: 'Rajin',
                href: '/dashboard',
            },
            {
                label: 'Paksi',
                href: '/dashboard',
            },
            {
                label: 'Jabat Erat',
                href: '/dashboard',
            },
        ],
    },
    {
        label: 'Pengaduan',
        links: [
            {
                label: 'Daftar Pengaduan',
                href: '/',
            },
            {
                label: 'Kategori Pengaduan & Dasar Hukum',
                href: '/dashboard',
            },
            {
                label: 'Buat Pengaduan Baru',
                href: '/dashboard',
            },
            {
                label: 'Pengaduan Saya',
                href: '/dashboard',
            },
        ],
    },
];

export { menus, type Link, type Menu };
