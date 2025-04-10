import App from '../App';
import '../styles/index.css';
import ScrollProgressBar from '@/components/ScrollProgressBar';

export default function MyApp({
  Component,
  pageProps,
}: {
  Component: React.ElementType;
  pageProps: Record<string, unknown>;
}) {
  return (
    <App>
      <ScrollProgressBar />
      <Component {...pageProps} />
    </App>
  );
}
