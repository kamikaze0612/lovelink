import Link from "next/link";
import { Button } from "../ui/button";

export const Header: React.FC = () => {
  return (
    <header className="absolute left-0 right-0 top-0 flex h-[96px] items-center justify-between px-12 py-6 text-red-50">
      {/* TODO: Remove flex box configuration when logo is ready */}
      <div className="flex size-12 items-center justify-center rounded-full bg-white text-sm text-black">
        LOGO
      </div>
      <nav className="bg-brand absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full px-8 py-3">
        <ul className="text-brand-foreground flex h-full items-center gap-6 text-lg font-medium">
          <li>About</li>
          <li>Contact</li>
          <li>How to use?</li>
        </ul>
      </nav>
      <div className="flex">
        <Button
          size="lg"
          variant="secondary"
          className="text-base font-semibold"
          asChild
        >
          <Link href="/login">Log In</Link>
        </Button>
      </div>
    </header>
  );
};
