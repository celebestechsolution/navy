import '@/styles/globals.css';

import type { AppPropsWithLayout } from '@/types/app/next-layout';

import { RootProvider } from '@/services/providers/root-provider';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout || ((page) => page);

    return <RootProvider>{getLayout(<Component {...pageProps} />)}</RootProvider>;
}
