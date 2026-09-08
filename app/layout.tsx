import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://eointraynor.com'),
  title: 'Eoin Traynor — Engineering Manager at CrowdStrike',
  description:
    'Engineering leader focused on team velocity, resilient cloud infrastructure, and enterprise platforms. Ex-HubSpot, currently leading platform teams at CrowdStrike.',
  openGraph: {
    title: 'Eoin Traynor — Engineering Manager at CrowdStrike',
    description:
      'Engineering leader focused on team velocity, resilient cloud infrastructure, and enterprise platforms.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eoin Traynor — Engineering Manager at CrowdStrike',
    description:
      'Engineering leader focused on team velocity, resilient cloud infrastructure, and enterprise platforms.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
