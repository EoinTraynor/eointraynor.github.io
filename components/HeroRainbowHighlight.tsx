import { RoughNotation } from 'react-rough-notation';
import { PropsWithChildren } from 'react';

const HeroRainbowHighlight = ({ children }: PropsWithChildren) => {
  const length = 1000;
  const animationDuration = Math.floor(30 * length);
  const colors = ['#F59E0B', '#84CC16', '#10B981', '#3B82F6'];
  const color = colors[0];

  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      padding={[0, 2]}
      iterations={1}
      animationDuration={animationDuration}
      color={color}
    >
      {children}
    </RoughNotation>
  );
};

export default HeroRainbowHighlight;
