import * as React from 'react';

import Link from 'next/link';

import { ApplicationLogo } from '@/components/application-logo';
import { TablerIcon } from '@/components/tabler-icon';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { MobileSheetFooter } from './mobile-sheet-footer';
import { MobileSheetItem } from './mobile-sheet-item';

const MobileSheet = () => {
    const [open, setOpen] = React.useState<boolean>(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant='ghost' size='icon'>
                    <span className='sr-only'>Sidebar Toggle</span>
                    <TablerIcon name='IconMenuDeep' className='size-6 stroke-2 text-primary' />
                </Button>
            </SheetTrigger>
            <SheetContent side='left' className='flex w-4/5 flex-col p-0'>
                <SheetHeader className='space-y-0 border-b p-4'>
                    <SheetTitle className='sr-only'>Sheet Title</SheetTitle>
                    <SheetDescription className='sr-only'>Sheet Description</SheetDescription>
                    <Link href='/' className='w-min'>
                        <span className='sr-only'>DPMPTSP Logo</span>
                        <ApplicationLogo className='h-8 w-auto' />
                    </Link>
                </SheetHeader>

                <ScrollArea className='flex-1'>
                    <MobileSheetItem {...{ setOpen }} />
                    <ScrollBar orientation='vertical' />
                </ScrollArea>

                <SheetFooter className='border-t px-4 py-2 sm:flex-col-reverse sm:justify-start sm:space-x-0'>
                    <MobileSheetFooter {...{ setOpen }} />
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

export { MobileSheet };
