import { Menu } from "./Menu";
import { ToggleTheme } from "./ToggleTheme.jsx";
export const Header = () => {
  return (
    <header className="flex justify-between mt-3 w-full">
      <nav className="border-gray-200 w-full px-4 rounded-b-lg backdrop-blur-sm md:px-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 md:px-6 lg:px-0">
          <ul className="flex items-center">
            <li>
              <h1 className="font-semibold text-md">
                Melquicedec Zelaya
              </h1>
            </li>
            <ToggleTheme />
          </ul>
          <Menu />
        </div>
      </nav>
    </header>
  );
};
