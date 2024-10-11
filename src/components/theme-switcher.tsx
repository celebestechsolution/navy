import { useTheme } from 'next-themes';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

import { Button } from './ui/button';

interface ThemeSwitcherProps {
    tabIndex?: number;
}

const ThemeSwitcher = ({ tabIndex }: ThemeSwitcherProps) => {
    const { theme, setTheme } = useTheme();

    return (
        <Button
            variant='outline'
            size='icon'
            type='button'
            tabIndex={tabIndex}
            aria-label={'Switch to ' + theme === 'light' ? 'dark' : 'light' + 'mode'}
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            <span className='sr-only'>Theme Swticher</span>
            <SunIcon className='size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
            <MoonIcon className='absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
        </Button>
    );
};

export { ThemeSwitcher };
