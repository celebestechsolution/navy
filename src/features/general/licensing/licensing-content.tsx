import Link from 'next/link';

import { licensingLists } from './licensing-lists';

import { TablerIcon } from '@/components/tabler-icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LicensingContent = () => {
    return (
        <>
            <h1 className='mb-5 text-2xl font-bold text-primary'>Perizinan</h1>

            <section id='licensing-lists' className='flex flex-col gap-3'>
                {licensingLists.map((item, i) => (
                    <Link key={i} href={item.href}>
                        <Card className='shadow-none'>
                            <CardHeader className='flex flex-row items-center justify-between space-y-0 p-4 pb-2'>
                                <CardTitle className='text-sm font-medium'>{item.title}</CardTitle>
                                <TablerIcon name={item.icon} className='text-primary' />
                            </CardHeader>
                            <CardContent className='p-4 pt-0'>
                                <h3 className='text-lg font-bold text-primary'>{item.label}</h3>
                                <p className='text-[0.8rem]/[1.1rem] text-muted-foreground'>{item.description}</p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </section>
        </>
    );
};

export { LicensingContent };
