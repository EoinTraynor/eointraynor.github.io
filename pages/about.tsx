import AboutMe from '@components/AboutMe';
import PageTemplate from '@components/PageTemplate';
import WorkExperience from '@components/WorkExperience';

const About = () => {
  return (
    <PageTemplate>
      <AboutMe />
      <WorkExperience />
    </PageTemplate>
  );
};

export default About;
