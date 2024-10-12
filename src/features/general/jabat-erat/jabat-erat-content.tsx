import Image from 'next/image';

import jabatEratLogo from '../../../../public/images/jabat-erat-logo.png';

const JabatEratContent = () => {
    return (
        <>
            <h1 className='text-2xl font-bold text-primary'>Jabat Erat</h1>
            <div className='my-5 flex items-center justify-center'>
                <Image className='aspect-square size-52' src={jabatEratLogo} alt='Jabat Erat Logo' />
            </div>
            <article className='space-y-5'>
                <h2 className='text-lg font-semibold text-primary'>
                    Kerjasama Pembinaan dan Bantuan Ekonomi Berkelanjutan
                </h2>
                <p className='text-sm text-muted-foreground'>
                    JABAT ERAT Merupakan inovasi yang memfasilitasi pelaku usaha mulai dari perizinan usaha, peningkatan
                    kualitas produk, fasilitasi bantuan permodalan dan fasilitasi pemasaran produk.
                </p>
                <p className='text-sm text-muted-foreground'>
                    JABAT ERAT dirancang untuk membantu pelaku usaha mikro, kecil dan menengah dalam pengurusan
                    legalitas usaha, kelengkapan administrasi produk untuk pebingkatan kualitas produk, membantu akses
                    permodalan ke Lembaga Perbankan dan Lembaga Keuangan lainnya serta membantu akses pemasaran terutama
                    di ritel modern, pusat perbelanjaan dan akses pemasaran lainnya
                </p>
                <p className='text-sm text-muted-foreground'>
                    JABAT ERAT tahun 2021 masuk dalam Top 50 lnovasi Pelayanan Publik dalam Kompetisi Inovasi Pelayanan
                    Publik Tingkat Provinsi.
                </p>
            </article>
        </>
    );
};

export { JabatEratContent };
