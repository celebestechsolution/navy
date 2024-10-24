import * as React from 'react';

import { useRouter } from 'next/router';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { menus } from './mobile-sheet-links';

interface MobileSheetItemProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileSheetItem = ({ setOpen }: MobileSheetItemProps) => {
    const auth: boolean = true;

    const router = useRouter();

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen((prevState) => !prevState);
        command();
    }, []);

    return (
        // <div className='space-y-2 pr-3'>
        <div className='space-y-2 pe-3 ps-6'>
            {menus.map(({ label, links }, i) => (
                <div key={i} className='space-y-2'>
                    <span className='text-xs font-medium text-muted-foreground'>{label}</span>
                    {links.map((link) => {
                        const boolean: boolean =
                            link.href.toString() === '/'
                                ? link.href.toString() === router.asPath
                                : router.asPath.startsWith(link.href.toString());

                        if (!auth && link.guard === 'auth') {
                            return null;
                        }

                        return (
                            <Button
                                key={link.label}
                                variant='ghost'
                                onClick={() => runCommand(() => router.push(link.href))}
                                className={cn(
                                    'w-full justify-start gap-2',
                                    boolean && 'bg-accent font-semibold text-foreground',
                                )}>
                                {link.label}
                            </Button>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export { MobileSheetItem };
