type PermitType = {
    label: string;
    description: string;
};

const permitTypes: PermitType[] = [
    {
        label: 'IUMK',
        description: 'Izin Usaha Mikro Kecil',
    },
    {
        label: 'SIPA',
        description: 'Surat Izin Praktik Apoteker',
    },
    {
        label: 'SIPTTK',
        description: 'Surat Izin Praktik Tenaga Teknis Kefarmasian',
    },
    {
        label: 'SIKR',
        description: 'Surat Izin Kerja Optisien',
    },
    {
        label: 'SIPDGS',
        description: 'Surat Izin Praktik Dokter Gigi Spesialis',
    },
    {
        label: 'IMB-TS',
        description: 'Surat Mendirikan Bangunan Gedung Tidak Sederhana',
    },
    {
        label: 'PAUD',
        description: 'Izin Pendirian Satuan Pendidikan Anak Usia Dini',
    },
    {
        label: 'SIPDGP PPDGS',
        description: 'Surat Izin Praktik Dokter Program Pendidikan Dokter Gigi Spesialis',
    },
    {
        label: 'SIKP',
        description: 'Surat Izin Kerja Perawat',
    },
    {
        label: 'SITG',
        description: 'Surat Izin Tukang Gigi',
    },
];

export { permitTypes, type PermitType };
