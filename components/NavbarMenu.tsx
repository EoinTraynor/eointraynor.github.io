import { Theme } from '@types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type Props = {
  changeTheme: () => void;
  theme: Theme.DARK;
};

const NavbarMenu = () => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      <Link href="/about">
        <a
          className={`text-base  ${
            router.asPath === '/about'
              ? 'text-gray-800 font-bold dark:text-gray-400'
              : 'text-gray-600 dark:text-gray-300 font-normal '
          }`}
        >
          About{' '}
          {router.asPath === '/about' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-down inline-block h-3 w-3"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              />
            </svg>
          )}
        </a>
      </Link>
      <Link href="/projects">
        <a
          className={`text-base  ${
            router.asPath === '/projects'
              ? 'text-gray-800 font-bold dark:text-gray-400'
              : 'text-gray-600 dark:text-gray-300 font-normal '
          }`}
        >
          Projects
          {router.asPath === '/projects' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-down inline-block h-3 w-3"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              />
            </svg>
          )}
        </a>
      </Link>
      <Link href="/experience">
        <a
          className={`text-base  ${
            router.asPath === '/experience'
              ? 'text-gray-800 font-bold dark:text-gray-400'
              : 'text-gray-600 dark:text-gray-300 font-normal '
          }`}
        >
          Experience{' '}
          {router.asPath === '/experience' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-down inline-block h-3 w-3"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              />
            </svg>
          )}
        </a>
      </Link>
      <Link href="/contact">
        <a
          className={`text-base  ${
            router.asPath === '/contact'
              ? 'text-gray-800 font-bold dark:text-gray-400'
              : 'text-gray-600 dark:text-gray-300 font-normal '
          }`}
        >
          Contact
          {router.asPath === '/contact' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-down inline-block h-3 w-3"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              />
            </svg>
          )}
        </a>
      </Link>
    </div>
  );
};

export default NavbarMenu;
