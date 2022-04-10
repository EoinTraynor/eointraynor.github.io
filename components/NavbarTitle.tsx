import Link from 'next/link';

type Props = {
  name: string;
  jobTitle: string;
};

const NavbarTitle = ({ name, jobTitle }: Props) => (
  <Link href="/">
    <a>
      <h1 className="font-semibold text-xl dark:text-gray-100">{name}</h1>
      <p className="text-base font-light light:text-gray-500 dark:text-gray-300">
        {jobTitle}
      </p>
    </a>
  </Link>
);

export default NavbarTitle;
