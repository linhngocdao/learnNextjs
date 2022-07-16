import '../styles/globals.scss'
import { AppPropsWithLayout } from '../models/layout'
import Layout from '../components/Layout';
// import 'bootstrap/dist/css/bootstrap.css';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWrapper = Component.Layout ?? Layout;
  return (<LayoutWrapper><Component {...pageProps} /></LayoutWrapper>)
}

export default MyApp
