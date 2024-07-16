import ThemeController from "./ThemeController";

const Header = () => {
  return (
    <header className="relative mt-2 flex items-center justify-between">
      <h1 className="text-2xl font-bold">Angelo Santos</h1>

      <ThemeController />
    </header>
  );
};

export default Header;
