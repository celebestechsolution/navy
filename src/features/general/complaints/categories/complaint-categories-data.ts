type Category = {
    title: string;
    description: string;
};

const categories: Category[] = [
    {
        title: 'Pengaduan Perizinan',
        description: 'Segala bentuk pengaduan masyarakat terkait pelayanan perizinan dan non perizinanan',
    },
    {
        title: 'Gratifikasi',
        description:
            'Pengaduan terkait adanya dugaan permberian uang, barang, diskon, komisi dan semacamnya dalam rangka pelayanan perizinan dan non perizinan',
    },
    {
        title: 'Kode Etik',
        description:
            'Pengaduan terkait adanya dugaan pelanggaran sikap, tingkat laku atau perbuatan ASN lingkup dinas DPMPTSP',
    },
    {
        title: 'Whistleblowing',
        description:
            'Pengaduan terkait adanya dugaan tindak pidana korupsi yang dilakukan oleh aparatur terkait dengan pelayanan perizinan dan non perizinan',
    },
];

export { categories, type Category };
