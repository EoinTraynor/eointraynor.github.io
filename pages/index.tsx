// import Hero from '@components/Hero';
import PageTemplate from '@components/PageTemplate';
import Welcome from '@components/WelcomeAnimation';
import ProfileCard from '@components/ProfileCard';

const Index = () => {
  return (
    <>
      <PageTemplate>
        <ProfileCard />
        {/* <Hero /> */}
        <Welcome />
        {/* <Achievements />
        <SideProjects />
        <Contact /> */}
      </PageTemplate>
    </>
  );
};

export default Index;
