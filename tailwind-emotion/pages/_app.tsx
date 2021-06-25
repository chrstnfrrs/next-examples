import * as React from 'react';
import type { AppProps } from 'next/app';

import '../styles/globals.css';

const AppLayout = ({ Component, pageProps }: AppProps): React.ReactNode => (
  <Component {...pageProps} />
);

export default AppLayout;
