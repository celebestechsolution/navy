import * as React from 'react';

import type { IconProps } from '@tabler/icons-react';
import * as tablerIcons from '@tabler/icons-react';

import { cn } from '@/lib/utils';

interface TablerIconProps extends IconProps {
    className?: string;
    name: keyof typeof tablerIcons;
}

const TablerIcon = ({ className, name, ...props }: TablerIconProps) => {
    const Icon: React.FC<IconProps> = tablerIcons[name] as React.FC<IconProps>;

    return <Icon className={cn('size-5 stroke-[1.5]', className)} {...props} />;
};

export { TablerIcon };
