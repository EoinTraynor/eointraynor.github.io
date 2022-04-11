import { FunctionComponent } from 'react';
import { RoughNotationGroup } from 'react-rough-notation';
import HeroRainbowHighlight from './HeroRainbowHighlight';

const Hero: FunctionComponent = () => {
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      {/* Text container */}

      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          <HeroRainbowHighlight>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Developer.
            </h1>
          </HeroRainbowHighlight>
        </RoughNotationGroup>
      </div>
    </div>
  );
};

export default Hero;
