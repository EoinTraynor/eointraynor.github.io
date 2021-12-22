import Welcome from '@components/welcome';
import Head from 'next/head';

const Index = () => {
  const pageTitle = 'Eoin Traynor Website';
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main>
        <Welcome />
      </main>
    </>
  );
};

export default Index;
