import { Link } from "react-router-dom";
import { HeaderNav } from "./HeaderNav";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <Logo/>
          <HeaderNav />
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <Link
              to="/login"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Вхід
            </Link>
            <Link
              to="/about"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
            Реєстрація
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
