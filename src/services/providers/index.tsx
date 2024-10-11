import * as React from 'react';

import { ThemeProvider } from './theme-provider';

interface RootProviderProps {
    children: React.ReactNode;
}

// prettier-ignore
const RootProvider = ({ children }: RootProviderProps) => {
    return (
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            {children}
        </ThemeProvider>
    );
};

export { RootProvider };
