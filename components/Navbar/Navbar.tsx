import { userData } from '@constants';
import { Theme } from '@types';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import DarkMode from './NavbarDarkMode';
import NavbarHamburger from './NavbarHamburger';
import NavbarMenu from './NavbarMenu';
import NavbarSocialLinks from './NavbarSocialLinks';
import NavbarTitle from './NavbarTitle';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="px-4 py-10 md:py-20">
      <div className="flex  md:flex-row justify-between items-center">
        <div className="flex flex-col">
          <NavbarTitle name={userData.name} jobTitle={userData.jobTitle} />
        </div>

        <nav className="space-x-8 hidden md:block">
          <NavbarMenu />
        </nav>

        <div className="space-x-4 flex flex-row items-center">
          <NavbarSocialLinks socialLinks={userData.socialLinks} />
          <DarkMode
            changeTheme={() =>
              setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
            }
            theme={theme}
          />
          <NavbarHamburger
            clickHamburger={() => setIsDropdownOpen(!isDropdownOpen)}
            isDropdownOpen={isDropdownOpen}
          />
        </div>
      </div>
      {isDropdownOpen && (
        <nav className="space-x-8 block md:hidden mt-4">
          <NavbarMenu />
        </nav>
      )}
    </header>
  );
};

export default Navbar;
