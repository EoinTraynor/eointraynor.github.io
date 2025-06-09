import { userData } from '@constants';
import { Theme } from '@types';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import DarkMode from './NavbarDarkMode';
// import NavbarMenu from './NavbarMenu';
import NavbarSocialLinks from './NavbarSocialLinks';
import NavbarTitle from './NavbarTitle';

const Navbar = () => {
  const router = useRouter();
  console.log(router.asPath);
  const { theme, setTheme } = useTheme();

  return (
    <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
      <div className="flex  md:flex-row justify-between items-center">
        <div className="flex flex-col">
          <NavbarTitle name={userData.name} jobTitle={userData.jobTitle} />
        </div>

        <div className="space-x-8 hidden md:block">{/* <NavbarMenu /> */}</div>

        <div className="space-x-4 flex flex-row items-center">
          <NavbarSocialLinks socialLinks={userData.socialLinks} />
          <DarkMode
            changeTheme={() =>
              setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
            }
            theme={theme}
          />
        </div>
      </div>
      {/* <div className="space-x-8 block md:hidden mt-4">
        <NavbarMenuMobile />
      </div> */}
    </div>
  );
};

export default Navbar;
