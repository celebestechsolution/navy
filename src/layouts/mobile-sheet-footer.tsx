import * as React from 'react';

import { useTheme } from 'next-themes';
import Link from 'next/link';

import { TablerIcon } from '@/components/tabler-icon';
import { ThemeSwitcher } from '@/components/theme-switcher';
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

const MobileSheetFooter = ({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [isLogin, setIsLogin] = React.useState<boolean>(false);

    const { setTheme } = useTheme();

    return !isLogin ? (
        <div className='flex items-center gap-3'>
            <Button className='w-full' asChild>
                <Link href='/login'>Masuk atau Daftar Akun</Link>
            </Button>
            <div className='shrink-0'>
                <ThemeSwitcher />
            </div>
        </div>
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
                                    <DropdownMenuItem onSelect={() => setTheme('light')}>Terang</DropdownMenuItem>
                                    <DropdownMenuItem onSelect={() => setTheme('dark')}>Gelap</DropdownMenuItem>
                                    <DropdownMenuItem onSelect={() => setTheme('system')}>Sistem</DropdownMenuItem>
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
    );
};

export { MobileSheetFooter };
