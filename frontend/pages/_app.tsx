import { AppProps } from 'next/app';
import SiteLayout from '../components/SiteLayout';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SiteLayout>
      <Component {...pageProps} />
    </SiteLayout>
  );
}

export default MyApp
