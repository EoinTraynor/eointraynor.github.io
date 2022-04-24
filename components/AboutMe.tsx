import { userData } from '@constants';
import { FunctionComponent } from 'react';
import WorkExperience from './WorkExperience';

const AboutMe: FunctionComponent = () => {
  return (
    <div id="about-me" className="mx-auto">
      <h2 className="text-2xl">About Me.</h2>
      <p>{userData.bio}</p>
      <WorkExperience />
    </div>
  );
};

export default AboutMe;
