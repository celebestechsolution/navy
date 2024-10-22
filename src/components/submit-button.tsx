import { cn } from '@/lib/utils';

import { TablerIcon } from './tabler-icon';
import { Button, ButtonProps, buttonVariants } from './ui/button';

interface SubmitButtonProps extends Omit<ButtonProps, 'asChild'> {
    label: string;
}

const SubmitButton = (props: SubmitButtonProps) => {
    const { className, label, variant, size, disabled } = props;

    return (
        <Button className={cn(buttonVariants({ className, size, variant }))} disabled={disabled} {...props}>
            {disabled && <TablerIcon name='IconLoader' className='me-2 size-4 animate-spin' />}
            {disabled ? 'Memproses...' : label}
        </Button>
    );
};

export { SubmitButton };
