import Link from "next/link";

import { Button } from "@/components/ui/button";

export const Header: React.FC = () => {
  const items: { label: string; href: string }[] = [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/how-to-use", label: "How to use?" },
  ];

  return (
    <header className="absolute left-0 right-0 top-0 z-20 flex h-[96px] items-center justify-between px-12 py-6 text-brand-foreground">
      {/* TODO: Remove flex box configuration when logo is ready */}
      <Link href="/">
        <div className="flex size-12 items-center justify-center rounded-full bg-white text-sm text-black">
          LOGO
        </div>
      </Link>

      <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand px-8 py-3">
        <ul className="flex h-full items-center gap-6 text-lg font-medium text-brand-foreground">
          {items.map((item) => (
            <li key={item.label}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <Button
        size="lg"
        variant="secondary"
        className="text-base font-semibold"
        asChild
      >
        <Link href="/login">Log In</Link>
      </Button>
    </header>
  );
};
