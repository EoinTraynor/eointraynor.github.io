import Link from 'next/link';
import { FunctionComponent } from 'react';
import profile from '../public/assets/profile/profile.jpg';

const AboutMe: FunctionComponent = () => {
  return (
    <div id="about-me" className="mx-auto">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex md:w-3/4 flex-col">
          <div>
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
              Hey, I’m {/* <RainbowHighlight color={colors[0]}> */}
              <span className="dark:text-black">Eoin Traynor</span>
              {/* </RainbowHighlight>{' '} */}
            </h1>

            <h2 className="text-gray-600 dark:text-gray-400 mb-16 mt-4 font-light tracking-wide leading-normal">
              🖥 I&apos;m a developer, writer, and a creator. <br />
              💼 I work at{' '}
              <span className="font-bold">
                <Link href="https://hubspot.com" passHref>
                  HubSpot
                </Link>
              </span>{' '}
              as a{' '}
              <span className="dark:text-white font-bold">
                Senior Software Engineer.{' '}
              </span>{' '}
              <br />
              {/* 🤗 You've discovered my piece on the internet.
                <br />  */}
              📍 I&apos;ve recently moved to{' '}
              <span className="text-black dark:text-white font-bold">
                Berlin{' '}
              </span>
              <br />
              🛠️ I mainly work with ReactJS, TypeScript, NodeJS & AWS <br></br>
              🌱 I&apos;m currently learning to speak German <br></br>
              📫 Feel free to email or connect with me <br></br>
              ⚡️ Fun fact: You can install me `npx eointraynor` <br></br>
            </h2>
          </div>
        </div>

        <div className="md:flex hidden md:w-1/4 flex-col">
          <img
            src={profile.src}
            alt="profile image"
            className="rounded-full max-w-[200px] shadow-xl shadow-cyan-500/50"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
