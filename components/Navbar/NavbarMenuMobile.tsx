import Link from 'next/link';

const NavbarMenuMobile = () => {
  return (
    <>
      <Link
        href="/about"
        className="text-base font-normal light:text-gray-600 dark:text-gray-300">
        
          About
        
      </Link>
      <Link
        href="/projects"
        className="text-base font-normal light:text-gray-600 dark:text-gray-300">
        
          Projects
        
      </Link>
      <Link
        href="/experience"
        className="text-base font-normal light:text-gray-600 dark:text-gray-300">
        
          Experience
        
      </Link>
      <Link
        href="/contact"
        className="text-base font-normal light:text-gray-600 dark:text-gray-300">
        
          Contact
        
      </Link>
    </>
  );
};

export default NavbarMenuMobile;
