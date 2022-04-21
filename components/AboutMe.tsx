import { userData } from '@constants';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import eamonDunphy from '../public/assets/profile/eamon-dunphy.jpeg';
import WorkExperience from './WorkExperience';

const AboutMe: FunctionComponent = () => {
  return (
    <div className="container mx-auto px-5">
      <Image src={eamonDunphy} alt="profile image"></Image>
      <h1>{userData.name}</h1>
      <h2>{userData.jobTitle}</h2>
      <p>{userData.bio}</p>
      <br />
      <WorkExperience />
    </div>
  );
};

export default AboutMe;
