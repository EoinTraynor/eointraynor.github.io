type Props = {
  clickHamburger: () => void;
  isDropdownOpen: boolean;
};

const NavbarHamburger = ({ isDropdownOpen, clickHamburger }: Props) => {
  return (
    <div className="md:hidden">
      <button
        onClick={clickHamburger}
        type="button"
        className="block light:hover:text-gray-600 font-bold dark:text-gray-400"
      >
        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
          {isDropdownOpen ? (
            <path
              fillRule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
          ) : (
            <path
              fillRule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          )}
        </svg>
      </button>
    </div>
  );
};

export default NavbarHamburger;
