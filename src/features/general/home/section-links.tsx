import Link from 'next/link';

import type { TablerIconName } from '@/types/app/tabler-icon';

import { TablerIcon } from '@/components/tabler-icon';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

type Service = {
    label: string;
    icon: TablerIconName;
    href: string;
};

const services: Service[] = [
    {
        label: 'Perizinan',
        icon: 'IconLicense',
        href: '/permits',
    },
    {
        label: 'Pengaduan',
        icon: 'IconBallpen',
        href: '/complaints',
    },
    {
        label: 'Inovasi',
        icon: 'IconPackages',
        href: '/innovations',
    },
];

const SectionLinks = () => {
    return (
        <section id='links' className='space-y-6 py-10'>
            <div className='flex items-center justify-between'>
                <h5 className='text-base font-semibold text-primary'>Layanan</h5>
            </div>
            <div className='grid grid-cols-3 gap-3'>
                {services.map((item, index) => (
                    <Link key={index} href={item.href} className='group'>
                        <Card className='p-4 text-primary/75 shadow-none group-hover:bg-accent/75'>
                            <CardHeader className='items-center p-0'>
                                <TablerIcon name={item.icon} className='size-10 stroke-2' />
                            </CardHeader>
                            <CardContent className='flex justify-center p-0 pt-2'>
                                <h4 className='text-sm font-semibold'>{item.label}</h4>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export { SectionLinks };
