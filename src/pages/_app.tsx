import '@/styles/globals.css';

import type { AppPropsWithLayout } from '@/types/app/next-layout';

import { RootProvider } from '@/services/providers/root-provider';
import { TanstackQueryProvider } from '@/services/providers/tanstack-query-provider';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout || ((page) => page);

    return (
        <RootProvider>
            {getLayout(
                <TanstackQueryProvider>
                    <Component {...pageProps} />
                </TanstackQueryProvider>,
            )}
        </RootProvider>
    );
}
