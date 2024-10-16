import { fontFamily } from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

export const shadcnPlugin = plugin(
    function ({ addBase }) {
        addBase({
            ':root': {
                '--background': '0 0% 100%',
                '--background-secondary': '0 0% 97.65%',
                '--foreground': '240 10% 3.9%',
                '--muted': '240 4.8% 95.9%',
                '--muted-foreground': '240 3.8% 46.1%',
                '--popover': '0 0% 100%',
                '--popover-foreground': '240 10% 3.9%',
                '--card': '0 0% 100%',
                '--card-foreground': '240 10% 3.9%',
                '--border': '240 5.9% 90%',
                '--input': '240 5.9% 90%',
                '--primary': '223.75 42.86% 21.96%',
                '--primary-foreground': '0 0% 98%',
                '--secondary': '240 4.8% 95.9%',
                '--secondary-foreground': '240 5.9% 10%',
                '--accent': '240 4.8% 95.9%',
                '--accent-foreground': '240 5.9% 10%',
                '--destructive': '0 72.22% 50.59%',
                '--destructive-foreground': '0 0% 98%',
                '--ring': '223.75 42.86% 21.96%',
                '--chart-1': '12 76% 61%',
                '--chart-2': '173 58% 39%',
                '--chart-3': '197 37% 24%',
                '--chart-4': '43 74% 66%',
                '--chart-5': '27 87% 67%',
                '--radius': '0.5rem',
            },
            '.dark': {
                '--background': '240 10% 3.9%',
                '--background-secondary': '240 6.67% 8.82%',
                '--foreground': '0 0% 98%',
                '--muted': '240 3.7% 15.9%',
                '--muted-foreground': '240 5% 64.9%',
                '--popover': '240 10% 3.9%',
                '--popover-foreground': '0 0% 98%',
                '--card': '240 10% 3.9%',
                '--card-foreground': '0 0% 98%',
                '--border': '240 3.7% 15.9%',
                '--input': '240 3.7% 15.9%',
                '--primary': '226.67 33.33% 94.71%',
                '--primary-foreground': '240 5.9% 10%',
                '--secondary': '240 3.7% 15.9%',
                '--secondary-foreground': '0 0% 98%',
                '--accent': '240 3.7% 15.9%',
                '--accent-foreground': '0 0% 98%',
                '--destructive': '0 72.22% 50.59%',
                '--destructive-foreground': '0 0% 98%',
                '--ring': '240 4.9% 83.9%',
                '--chart-1': '220 70% 50%',
                '--chart-2': '160 60% 45%',
                '--chart-3': '30 80% 55%',
                '--chart-4': '280 65% 60%',
                '--chart-5': '340 75% 55%',
            },
        });
        addBase({
            '*': { '@apply border-border': {} },
            body: { '@apply bg-background text-foreground': {} },
        });
    },
    {
        theme: {
            extend: {
                animation: {
                    'accordion-down': 'accordion-down 0.2s ease-out',
                    'accordion-up': 'accordion-up 0.2s ease-out',
                },
                borderRadius: {
                    lg: 'var(--radius)',
                    md: 'calc(var(--radius) - 2px)',
                    sm: 'calc(var(--radius) - 4px)',
                },
                colors: {
                    background: 'hsl(var(--background))',
                    'background-secondary': 'hsl(var(--background-secondary))',
                    foreground: 'hsl(var(--foreground))',
                    card: {
                        DEFAULT: 'hsl(var(--card))',
                        foreground: 'hsl(var(--card-foreground))',
                    },
                    popover: {
                        DEFAULT: 'hsl(var(--popover))',
                        foreground: 'hsl(var(--popover-foreground))',
                    },
                    primary: {
                        DEFAULT: 'hsl(var(--primary))',
                        foreground: 'hsl(var(--primary-foreground))',
                    },
                    secondary: {
                        DEFAULT: 'hsl(var(--secondary))',
                        foreground: 'hsl(var(--secondary-foreground))',
                    },
                    muted: {
                        DEFAULT: 'hsl(var(--muted))',
                        foreground: 'hsl(var(--muted-foreground))',
                    },
                    accent: {
                        DEFAULT: 'hsl(var(--accent))',
                        foreground: 'hsl(var(--accent-foreground))',
                    },
                    destructive: {
                        DEFAULT: 'hsl(var(--destructive))',
                        foreground: 'hsl(var(--destructive-foreground))',
                    },
                    border: 'hsl(var(--border))',
                    input: 'hsl(var(--input))',
                    ring: 'hsl(var(--ring))',
                    chart: {
                        '1': 'hsl(var(--chart-1))',
                        '2': 'hsl(var(--chart-2))',
                        '3': 'hsl(var(--chart-3))',
                        '4': 'hsl(var(--chart-4))',
                        '5': 'hsl(var(--chart-5))',
                    },
                },
                fontFamily: {
                    sans: ['Figtree', ...fontFamily.sans],
                },
                keyframes: {
                    'accordion-down': {
                        from: {
                            height: '0',
                        },
                        to: {
                            height: 'var(--radix-accordion-content-height)',
                        },
                    },
                    'accordion-up': {
                        from: {
                            height: 'var(--radix-accordion-content-height)',
                        },
                        to: {
                            height: '0',
                        },
                    },
                },
            },
        },
    },
);
