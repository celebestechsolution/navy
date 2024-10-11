import * as tablerIcons from '@tabler/icons-react';
import { useTheme } from 'next-themes';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TablerIcon } from './tabler-icon';

interface Theme {
    value: string;
    label: string;
    icon: keyof typeof tablerIcons;
}

const themes: Theme[] = [
    {
        value: 'light',
        label: 'Light',
        icon: 'IconSunLow',
    },
    {
        value: 'dark',
        label: 'Dark',
        icon: 'IconMoon',
    },
    {
        value: 'system',
        label: 'System',
        icon: 'IconDeviceDesktop',
    },
];

const ThemeSelect = () => {
    const { theme, setTheme } = useTheme();

    return (
        <Select defaultValue={theme} onValueChange={setTheme}>
            <SelectTrigger>
                <SelectValue placeholder='Theme' />
            </SelectTrigger>
            <SelectContent>
                {themes.map((item, i) => (
                    <SelectItem key={i} value={item.value}>
                        <div className='flex items-center gap-2'>
                            <TablerIcon name={item.icon} className='size-4' />
                            {item.label}
                        </div>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export { ThemeSelect };
