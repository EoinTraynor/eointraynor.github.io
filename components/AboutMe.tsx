import { userData } from '@constants';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import profileImage from '../public/assets/profile/profile.jpg';
import WorkExperience from './WorkExperience';

const AboutMe: FunctionComponent = () => {
  return (
    <div id="about-me" className="mx-auto">
      <div className="flex py-8">
        <div>
          <h2 className="text-2xl">⚡ About Me.</h2>
          <p>{userData.bio}</p>
        </div>
        <div className="max-w-md px-8">
          <Image
            src={profileImage}
            alt="Profile Image"
            width={640}
            height={461}
          />
        </div>
      </div>
      <WorkExperience />
    </div>
  );
};

export default AboutMe;
