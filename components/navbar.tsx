import { Theme } from '@types';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import DarkMode from './NavbarDarkMode';

const Navbar = () => {
  const router = useRouter();
  console.log(router.asPath);
  const { theme, setTheme } = useTheme();

  return (
    <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
      <div className="flex  md:flex-row justify-between items-center">
        {/* Logo / Home / Text */}
        <DarkMode
          changeTheme={() =>
            setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
          }
          theme={theme}
        />
      </div>
    </div>
  );
};

export default Navbar;
