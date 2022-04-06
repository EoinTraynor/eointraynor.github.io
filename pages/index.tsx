import Achievements from '@components/Achievements';
import Contact from '@components/Contact';
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
        <Contact />
      </PageTemplate>
    </>
  );
};

export default Index;
