import Achievements from '@components/Achievements';
import Hero from '@components/Hero';
import PageTemplate from '@components/PageTemplate';
import SideProjects from '@components/SideProjects';
import Welcome from '@components/Welcome';

const Index = () => {
  return (
    <>
      <PageTemplate>
        <Hero />
        <Welcome />
        <Achievements />
        <SideProjects />
      </PageTemplate>
    </>
  );
};

export default Index;
