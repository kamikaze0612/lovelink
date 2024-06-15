"use client";
import { usePathname, useSearchParams } from "next/navigation";

const Homepage: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  console.log(pathname);
  console.log(Object.fromEntries(searchParams));
  console.log(searchParams.toString());
  return <div className="bg-background text-foreground">Homepage</div>;
};
export default Homepage;
