import { UserData } from '@types';
import Link from 'next/link';

const NavbarTitle = ({ name, jobTitle }: Partial<UserData>) => (
  <Link href="/" passHref>

    <h1 className="font-semibold text-xl">{name}</h1>
    <p className="text-base font-light">
      {jobTitle}
    </p>

  </Link>
);

export default NavbarTitle;
