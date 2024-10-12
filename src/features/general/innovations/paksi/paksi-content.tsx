import Image from 'next/image';

import paksiLogo from '../../../../../public/images/paksi-logo.png';

const PaksiContent = () => {
    return (
        <>
            <h1 className='text-2xl font-bold text-primary'>Paksi</h1>
            <div className='my-5 flex items-center justify-center'>
                <Image className='aspect-square size-52' src={paksiLogo} alt='Paksi Logo' />
            </div>
            <article className='space-y-5'>
                <h2 className='text-lg font-semibold text-primary'>Paket Kebijakan Investasi</h2>
                <p className='text-sm text-muted-foreground'>
                    PAKSI lahir karena melihat potensi dan peluang investasi di Kabupaten Pinrang sangat potensial
                    sehingga perlu dilakukan upaya percepatan memperkenalkan Kabupaten Pinrang kepada Penanam modal dan
                    untuk meningkatkan daya saing dalam kegiatan investasi. Hal ini sesuai dengan Keputusan Bupati
                    Pinrang Nomor 503/247/2011 tanggal 13 Desember 2011 tentang Paķet Kebijakan Investasi Kabupaten
                    Pinrang (PaKSI).
                </p>
                <p className='text-sm text-muted-foreground'>Paksi Terdiri Atas</p>
                <p className='text-sm text-muted-foreground'>1. Kebijakan Kemudahan Daerah (KKD)</p>
                <p className='text-sm text-muted-foreground'>2. Kebijakan Investasi Daerah (KID)</p>
                <p className='text-sm text-muted-foreground'>3. Kebijakan Pelayanan Terpadu Satu Pintu (PTSP)</p>
                <p className='text-sm text-muted-foreground'>
                    4. Kebijakan Sistem Pelayanan Informasi Perizinan Secara Elektronik (SPIPISE)
                </p>
            </article>
        </>
    );
};

export { PaksiContent };
