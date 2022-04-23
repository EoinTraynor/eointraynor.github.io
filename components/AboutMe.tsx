// import { userData } from '@constants';
// import Image from 'next/image';
import { FunctionComponent } from 'react';
import Destinations from './Tutorial/Destinations';
import HolidayCard from './Tutorial/HolidayCard';
// import eamonDunphy from '../public/assets/profile/eamon-dunphy.jpeg';
import WorkExperience from './WorkExperience';

const AboutMe: FunctionComponent = () => {
  return (
    <div id="about-me" className="container mx-auto px-5">
      {/* <Image src={eamonDunphy} alt="profile image"></Image>
      <h1>{userData.name}</h1>
      <h2>{userData.jobTitle}</h2>
      <p>{userData.bio}</p>
      <br /> */}
      <HolidayCard />
      <Destinations />
      <WorkExperience />
    </div>
  );
};

export default AboutMe;
