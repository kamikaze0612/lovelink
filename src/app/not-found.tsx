// TODO: Improve (add logo or some image make it more beautiful)
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFoundPage: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-6 bg-background text-center">
      <h1 className="text-3xl">Oops! Resource not found :(</h1>
      <Button asChild>
        <Link href="/">&larr; Go back to Home</Link>
      </Button>
    </main>
  );
};
export default NotFoundPage;
