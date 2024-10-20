import type { BreadcrumbItem } from '@/types/app/breadcrumb-item';

import { awards } from './about-awards-data';

import { Header } from '@/components/header';
import { AppShell } from '@/components/shells/app-shell';
import { SimpleBreadcrumb } from '@/components/simple-breadcrumb';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const breadcrumbItems: BreadcrumbItem[] = [
    {
        label: 'Beranda',
        type: 'link',
        href: '/',
    },
    {
        label: 'Tentang DPMPTSP',
        type: 'link',
        href: '/about',
    },
    {
        label: 'Penghargaan',
        type: 'page',
    },
];

const AboutAwardsContent = () => {
    return (
        <>
            <AppShell className='bg-background-secondary'>
                <section id='about-duties-breadcrumb'>
                    <SimpleBreadcrumb items={breadcrumbItems} />
                </section>
            </AppShell>
            <AppShell className='border-t border-border'>
                <section id='about-duties-content' className='space-y-6'>
                    <Header>
                        <Header.Title>Penghargaan</Header.Title>
                    </Header>
                    <Accordion type='single' collapsible className='w-full space-y-4'>
                        {awards.map((item, i) => (
                            <Card key={i} className='px-2.5 shadow-none'>
                                <AccordionItem value={`item-${i}`} className='border-b-0'>
                                    <AccordionTrigger className='group hover:no-underline'>
                                        <p className='flex flex-col text-start'>
                                            <span className='text-base font-bold text-primary group-hover:underline'>
                                                {item.title}
                                            </span>
                                            <span className='text-sm text-muted-foreground'>{item.source}</span>
                                        </p>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className='space-y-4'>
                                            <div>
                                                <p>{item.body}</p>
                                            </div>
                                            <div>
                                                <Skeleton className='h-44 w-full rounded-xl' />
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Card>
                        ))}
                    </Accordion>
                </section>
            </AppShell>
        </>
    );
};

export { AboutAwardsContent };
