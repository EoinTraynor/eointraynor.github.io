import Image from 'next/image';
import { FunctionComponent } from 'react';
import profileImage from '../public/assets/profile/profile.jpg';

const AboutMe: FunctionComponent = () => {
  return (
    <div id="about-me" className="mx-auto">
      <div className="py-8">
        <h2 className="text-2xl py-8">⚡ About Me.</h2>
        <div className="flex flex-col items-center">
          <div className="px-8 max-w-xs">
            <Image
              className="rounded-full max-w-xs"
              src={profileImage}
              alt="Profile Image"
            />
          </div>
          <ul className="mt-4">
            <li>🖥 I’m a developer.</li>
            <li>💼 I work at HubSpot as a Senior Software Engineer.</li>
            <li>📍 I&apos;ve recently moved to Berlin</li>
            <li>🛠️ I primarily work with ReactJS, TypeScript, NodeJS & AWS</li>
            <li>🌱 I&apos;m currently learning to speak German</li>
            <li>📫 Feel free to email or connect with me</li>
            <li>
              ⚡️ Fun fact: You can install me <code>npx eointraynor</code>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
