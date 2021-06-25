import * as React from 'react';
import type { AppProps } from 'next/app';

const AppLayout = ({ Component, pageProps }: AppProps): React.ReactNode => (
  <Component {...pageProps} />
);

export default AppLayout;
