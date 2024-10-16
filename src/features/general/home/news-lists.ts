type News = {
    title: string;
    category: string;
    image: string;
};

const newsLists: News[] = [
    {
        title: 'Layanan Perizinan Berusaha di Loket DPMPTSP Pinrang ...',
        category: 'Layanan',
        image: '/images/news-1.png',
    },
    {
        title: 'Bimtek Perizinan Berusaha Untuk Pelaku UMKM Di Kec...',
        category: 'Informasi',
        image: '/images/news-2.png',
    },
    {
        title: 'Jenis Perizinan Berusaha Sesuai Tingkat Risiko Kegiat...',
        category: 'Layanan',
        image: '/images/news-3.png',
    },
    {
        title: 'Pontensi Investasi Kabupaten Pinrang di Sektor Pertanian',
        category: 'Pengumuman',
        image: '/images/news-4.png',
    },
];

export { newsLists };
