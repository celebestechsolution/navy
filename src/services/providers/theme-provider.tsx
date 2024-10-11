import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps as NextThemeProviderProps } from 'next-themes/dist/types';

const ThemeProvider = ({ children, ...props }: NextThemeProviderProps) => {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export { ThemeProvider };
