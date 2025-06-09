import { UserData } from '@types';
import Link from 'next/link';

const NavbarTitle = ({ name, jobTitle }: Partial<UserData>) => (
  <Link href="/">
    <a>
      <h1 className="font-semibold text-xl">{name}</h1>
      <p className="text-base font-light">
        {jobTitle}
      </p>
    </a>
  </Link>
);

export default NavbarTitle;
