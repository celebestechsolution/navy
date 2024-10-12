import Image from 'next/image';

import rajinLogo from '../../../../../public/images/rajin-logo.png';

const RajinContent = () => {
    return (
        <>
            <h1 className='text-2xl font-bold text-primary'>Rajin</h1>
            <div className='my-5 flex items-center justify-center'>
                <Image className='aspect-square size-52' src={rajinLogo} alt='Rajin Logo' />
            </div>
            <article className='space-y-5'>
                <h2 className='text-lg font-semibold text-primary'>Gerai Perijinan</h2>
                <p className='text-sm text-muted-foreground'>
                    Gerai Perizinan disingkat RAJIN merupakan inovasi pelayanan perizinan hingga kantor Kelurahan dan
                    Desa yang terintegrasi dengan SIAP BOSS yang terbentuk berdasarkan SK Kadis DPMPTSP No.
                    503/15/SK/DPMPTSP/2019 dan Peraturan Bupati No. 17 Tahun 2020.
                </p>
                <p className='text-sm text-muted-foreground'>
                    RAJIN adalah Gerai pelayanan perizinan di tingkat desa/kelurahan yang berfungsi sebagai front office
                    informasi dan pelayanan perizinan, media promosi usaha masyarakat dan potensi desa/kelurahan.
                </p>
                <p className='text-sm text-muted-foreground'>
                    RAJIN bertujuan untuk meningkatkan kualitas pelayanan, meningkatkan minat masyarakat untuk berusaha
                    meningkatkan kepercayaan masyarakat terhadap pemerintah dalam pemberian pelayanan publik dan
                    terciptanya sinergitas dengan OPD terkait dalam mempromosikan potensi daerah.
                </p>
                <p className='text-sm text-muted-foreground'>
                    RAJIN tahun 2021 masuk dalam Top 50 Inovasi Pelayanan Publik dalam Kompetisi Inovasi Pelayanan
                    Publik Tingkat Provinsi.
                </p>
            </article>
        </>
    );
};

export { RajinContent };
