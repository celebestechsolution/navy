import { type Config } from 'tailwindcss';
import { shadcnPlugin } from '../plugins/shadcn-plugin';

export const shadcnPreset = {
    content: [],
    plugins: [shadcnPlugin],
} satisfies Config;
