import Link from 'next/link';

const NavbarMenuMobile = () => {
  return (
    <>
      <Link href="/about">
        <a className="text-base font-normal light:text-gray-600 dark:text-gray-300">
          About
        </a>
      </Link>
      <Link href="/projects">
        <a className="text-base font-normal light:text-gray-600 dark:text-gray-300">
          Projects
        </a>
      </Link>
      <Link href="/experience">
        <a className="text-base font-normal light:text-gray-600 dark:text-gray-300">
          Experience
        </a>
      </Link>
      <Link href="/contact">
        <a className="text-base font-normal light:text-gray-600 dark:text-gray-300">
          Contact
        </a>
      </Link>
    </>
  );
};

export default NavbarMenuMobile;
