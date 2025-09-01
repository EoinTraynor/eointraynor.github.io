import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import Navbar from './Navbar/Navbar';

type Props = {
  children?: ReactNode;
};

const PageTemplate = ({ children }: Props) => {
  const router = useRouter();

  const meta = {
    title: 'Eoin Traynor - Senior Software Engineer',
    description: 'My personal website',
    image: '/avatar.png',
    type: 'website',
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://eointraynor.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://eointraynor.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Eoin Traynor" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@EoinTraynor1" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} /> */}
        {/* {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )} */}
      </Head>
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <div>{children}</div>
        {/* <Footer /> */}
      </main>
    </>
  );
};

export default PageTemplate;
