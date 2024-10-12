import { type UrlObject } from 'url';

import type { TablerIconName } from '@/types/app/tabler-icon';

type Licensing = {
    title: string;
    icon: TablerIconName;
    href: UrlObject | string;
    label: string;
    description: string;
};

const licensingLists: Licensing[] = [
    {
        title: 'Izin Proses',
        icon: 'IconFileReport',
        href: '/',
        label: 'Daftar Izin Proses',
        description: 'Klik untuk melihat semua proses perizinan',
    },
    {
        title: 'Jenis Izin',
        icon: 'IconCategory2',
        href: '/',
        label: 'Daftar Jenis Izin',
        description: 'Klik untuk melihat semua jenis perizinan',
    },
    {
        title: 'Jumlah Pemohon',
        icon: 'IconUsersPlus',
        href: '/',
        label: 'Jumlah Pemohon Izin',
        description: 'Klik untuk melihat semua pemohon izin',
    },
    {
        title: 'Standar Pelayanan',
        icon: 'IconFileSettings',
        href: '/',
        label: 'Standar Pelayanan Perizinan',
        description: 'Klik untuk melihat semua standar pelayanan perizinan',
    },
];

export { licensingLists };
