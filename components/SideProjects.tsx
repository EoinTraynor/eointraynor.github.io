import Image from "next/legacy/image";
import { FunctionComponent } from 'react';
import coverPic from '../public/assets/blog/preview/cover.jpg';

const SideProjects: FunctionComponent = () => {
  return (
    <section className="dark:bg-gray-800 bg-white">
      <div className="max-w-6xl mx-auto h-48 dark:bg-gray-800 bg-white">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="dark:bg-gray-900 bg-[#F1F1F1]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {/* Single card */}
          <a
            href="https://tailwindmasterkit.com"
            className="w-full block shadow-2xl"
          >
            <div className="relative overflow-hidden">
              <Image
                src={coverPic}
                alt="portfolio"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                Tailwind Master Kit
              </h1>
              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                01
              </h1>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SideProjects;
