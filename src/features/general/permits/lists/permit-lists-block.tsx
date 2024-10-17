import { type PermitList } from './permit-lists-data';

import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';

const PermitListsBlock = ({ item }: { item: PermitList }) => {
    return (
        <Card className='px-2.5 shadow-none'>
            <AccordionItem value={item.permit_code} className='border-b-0'>
                <AccordionTrigger className='group hover:no-underline'>
                    <p className='flex flex-col text-start'>
                        <span className='text-base font-bold text-primary group-hover:underline'>{item.owner}</span>
                        <span className='text-sm font-medium text-green-600'>{item.permit_code}</span>
                    </p>
                </AccordionTrigger>
                <AccordionContent>
                    <div className='space-y-4'>
                        <div>
                            <h3>{item.university}</h3>
                        </div>
                        <div className='space-y-1'>
                            <p className='flex gap-1 text-sm font-normal'>
                                <span className='font-semibold'>Jenis Izin: </span>
                                <span>{item.permit_type}</span>
                            </p>
                            <p className='flex gap-1 text-sm font-normal'>
                                <span className='font-semibold'>Status: </span>
                                <span>{item.permit_status}</span>
                            </p>
                        </div>
                        <div className='space-y-1'>
                            <p className='text-sm font-semibold'>Tanggal Pendaftaran</p>
                            <p className='text-sm font-normal'>{item.created_at}</p>
                        </div>
                        <div className='space-y-1'>
                            <p className='text-sm font-semibold'>Tanggal Selesai &#40;Estimasi&#41;</p>
                            <p className='text-sm font-normal'>{item.finished_at}</p>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Card>
    );
};

export { PermitListsBlock };
