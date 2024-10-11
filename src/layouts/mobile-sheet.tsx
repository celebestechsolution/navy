import * as React from 'react';

import Link from 'next/link';

import { ApplicationLogo } from '@/components/application-logo';
import { TablerIcon } from '@/components/tabler-icon';
import { ThemeSelect } from '@/components/theme-select';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
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
            <SheetContent side='left' className='flex min-h-dvh w-4/5 flex-col pr-0'>
                <SheetHeader className='space-y-0'>
                    <SheetTitle className='sr-only'>DPMPTSP Pinrang</SheetTitle>
                    <SheetDescription className='sr-only'>Sidebar description from SIAP BOSS APP</SheetDescription>
                    <Link href='/' className='w-min'>
                        <span className='sr-only'>DPMPTSP Logo</span>
                        <ApplicationLogo className='h-8 w-auto' />
                    </Link>
                </SheetHeader>

                <ScrollArea className='flex-1'>
                    <MobileSheetItem {...{ setOpen }} />
                    <ScrollBar orientation='vertical' />
                </ScrollArea>

                <SheetFooter className='pr-6'>
                    <div className='flex items-center gap-3'>
                        <SheetClose asChild>
                            <Button type='button' variant='outline'>
                                Logout
                            </Button>
                        </SheetClose>
                        <ThemeSelect />
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

export { MobileSheet };
