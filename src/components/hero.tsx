import Link from "next/link";

import { Button } from "./ui/button";

export const Hero: React.FC = () => {
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center bg-[url(/background.png)] bg-cover bg-center">
      <h1 className="text-brand-foreground mb-2 text-7xl font-bold">
        Hello there
      </h1>
      <p className="text-brand-light mb-6 text-xl font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, vero.
      </p>
      <div className="flex gap-4">
        <Button asChild className="text-xl" size="xl">
          <Link href="/login">Get started</Link>
        </Button>
      </div>
    </div>
  );
};
