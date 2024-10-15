// import * as React from 'react';

// import Link from 'next/link';

// import { ApplicationLogo } from '@/components/application-logo';
// import { TablerIcon } from '@/components/tabler-icon';
// import { ThemeSelect } from '@/components/theme-select';
// import { Button } from '@/components/ui/button';
// import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
// import {
//     Sheet,
//     SheetClose,
//     SheetContent,
//     SheetDescription,
//     SheetFooter,
//     SheetHeader,
//     SheetTitle,
//     SheetTrigger,
// } from '@/components/ui/sheet';
// import { MobileSheetItem } from './mobile-sheet-item';

// const MobileSheet = () => {
//     const [open, setOpen] = React.useState<boolean>(false);

//     return (
//         <Sheet open={open} onOpenChange={setOpen}>
//             <SheetTrigger asChild>
//                 <Button variant='ghost' size='icon'>
//                     <span className='sr-only'>Sidebar Toggle</span>
//                     <TablerIcon name='IconMenuDeep' className='size-6 stroke-2 text-primary' />
//                 </Button>
//             </SheetTrigger>
//             <SheetContent side='left' className='m-2 flex w-4/5 flex-col rounded-md border pr-0'>
//                 <SheetHeader className='space-y-0'>
//                     <SheetTitle className='sr-only'>DPMPTSP Pinrang</SheetTitle>
//                     <SheetDescription className='sr-only'>Sidebar description from SIAP BOSS APP</SheetDescription>
//                     <Link href='/' className='w-min'>
//                         <span className='sr-only'>DPMPTSP Logo</span>
//                         <ApplicationLogo className='h-8 w-auto' />
//                     </Link>
//                 </SheetHeader>

//                 <ScrollArea className='flex-1'>
//                     <MobileSheetItem {...{ setOpen }} />
//                     <ScrollBar orientation='vertical' />
//                 </ScrollArea>

//                 <SheetFooter className='pr-6'>
//                     <div className='flex items-center gap-3'>
//                         <SheetClose asChild>
//                             <Button type='button' variant='outline'>
//                                 Logout
//                             </Button>
//                         </SheetClose>
//                         <ThemeSelect />
//                     </div>
//                 </SheetFooter>
//             </SheetContent>
//         </Sheet>
//     );
// };

// export { MobileSheet };

import * as React from 'react';

import Link from 'next/link';

import { ApplicationLogo } from '@/components/application-logo';
import { TablerIcon } from '@/components/tabler-icon';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
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
import { useTheme } from 'next-themes';
import { MobileSheetItem } from './mobile-sheet-item';

const MobileSheet = () => {
    const [open, setOpen] = React.useState<boolean>(false);
    const [isLogin, setIsLogin] = React.useState<boolean>(false);

    const { setTheme } = useTheme();

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant='ghost' size='icon'>
                    <span className='sr-only'>Sidebar Toggle</span>
                    <TablerIcon name='IconMenuDeep' className='size-6 stroke-2 text-primary' />
                </Button>
            </SheetTrigger>
            <SheetContent side='left' className='m-2 flex h-[98vh] w-4/5 flex-col rounded-md border p-0'>
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

                <SheetFooter className='border-t px-4 py-2'>
                    {!isLogin ? (
                        <Button className='rounded-full' onClick={() => setIsLogin(true)}>
                            Masuk atau Daftar Akun
                        </Button>
                    ) : (
                        <div className='flex items-center justify-between'>
                            <div className='relative flex items-center truncate text-start font-normal'>
                                <Avatar className='size-8'>
                                    <AvatarFallback>M</AvatarFallback>
                                </Avatar>
                                <div className='ml-3'>
                                    <strong className='inline-flex items-center font-semibold'>Mario</strong>
                                </div>
                            </div>
                            <div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        <TablerIcon name='IconDotsVertical' />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align='end' className='w-full min-w-[10rem]'>
                                        <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>Dashboard</DropdownMenuItem>
                                        <DropdownMenuItem>Pengaturan</DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>Pilih Tema</DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent>
                                                    <DropdownMenuItem onSelect={() => setTheme('light')}>
                                                        Terang
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem onSelect={() => setTheme('dark')}>
                                                        Gelap
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem onSelect={() => setTheme('system')}>
                                                        Sistem
                                                    </DropdownMenuItem>
                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem
                                            onSelect={() => {
                                                setIsLogin(false);
                                                setOpen(false);
                                            }}>
                                            Log out
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    )}
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

export { MobileSheet };
