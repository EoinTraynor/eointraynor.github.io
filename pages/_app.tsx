import Navbar from '@components/navbar';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import '../styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <Navbar />
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}
