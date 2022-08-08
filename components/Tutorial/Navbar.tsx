import DarkMode from '@components/Navbar/NavbarDarkMode';
import NavbarHamburger from '@components/Navbar/NavbarHamburger';
import NavbarTitle from '@components/Navbar/NavbarTitle';
import { userData } from '@constants';
import { Theme } from '@types';
import { useTheme } from 'next-themes';
import { useState } from 'react';
// import logo from '../../public/assexxxts/logo/logo.svg';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <header className="sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <NavbarTitle name={userData.name} jobTitle={userData.jobTitle} />
        </div>
        <div>
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
        <nav className="px-2 pt-2 pb-4 sm:flex sm:p-0">
          <a href="#" className="block px-2 py-1 rounded hover:bg-gray-800">
            List your property
          </a>
          <a
            href="#"
            className="mt-1 block px-2 py-1 rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
          >
            Trips
          </a>
          <a
            href="#"
            className="mt-1 block px-2 py-1 rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
          >
            Messages
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
