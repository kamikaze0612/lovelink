import Link from "next/link";
import Image from "next/image";

import backgroundImage from "@/../public/background.png";

import { Button } from "./ui/button";

export const Hero: React.FC = () => {
  return (
    <div className="h-[100vh]">
      <Image
        src={backgroundImage}
        quality={80}
        fill
        placeholder="blur"
        alt="Hearts and clouds"
        className="object-cover object-center"
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center">
        <h1 className="mb-2 text-7xl font-bold text-brand-foreground">
          Hello there
        </h1>
        <p className="mb-6 text-xl font-medium text-brand-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          vero.
        </p>
        <div className="flex gap-4">
          <Button asChild className="text-xl" size="xl">
            <Link href="/login">Get started</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
