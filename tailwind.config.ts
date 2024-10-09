import type { Config } from 'tailwindcss';

import { shadcnPreset } from './src/lib/presets/shadcn-preset';

const config: Config = {
    darkMode: ['class'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    presets: [shadcnPreset],
    plugins: [require('tailwindcss-animate')],
};
export default config;
