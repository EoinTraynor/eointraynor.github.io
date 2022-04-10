import Hero from '@components/Hero';
import PageTemplate from '@components/PageTemplate';
import Welcome from '@components/Welcome';

const Index = () => {
  return (
    <>
      <PageTemplate>
        <Hero />
        <Welcome />
        {/* <Achievements />
        <SideProjects />
        <Contact /> */}
      </PageTemplate>
    </>
  );
};

export default Index;
