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
        label: 'Umum',
        links: [
            {
                label: 'Beranda',
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
                href: '/permits/lists',
            },
            {
                label: 'Daftar Jenis Izin',
                href: '/login',
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
