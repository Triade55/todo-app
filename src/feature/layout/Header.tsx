import { ModeToggle } from "@/components/ButtonTheme";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b border-b-accent fixed top-0 bg-background z-20 w-full">
      <div className="container flex items-center py-2 max-w-lg m-auto gap-1 ">
        <h2 className="text-2xl font-bold mr-auto ">Todo-list</h2>

        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
