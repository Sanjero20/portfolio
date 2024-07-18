import Link from "next/link";
import ThemeController from "./ThemeController";

const Header = () => {
  return (
    <header className="mb-2 flex items-center justify-between">
      <Link href={"/"} className="hover:underline">
        <h1 className="text-2xl font-bold">Angelo Santos</h1>
      </Link>
      <ThemeController />
    </header>
  );
};

export default Header;
