"use client";
import { Button } from "@/components/ui/button";
import { useGlobalTransition } from "@/hooks/use_global_transition";
import { useSearchQuery } from "@/utils/use_search_query";

const Homepage: React.FC = () => {
  const { searchQuery, setSearchQuery } = useSearchQuery();
  const { isPending, startTransition } = useGlobalTransition();

  const handleClick = () => {
    startTransition(() => {
      setSearchQuery({ hello: "test" });
    });
  };

  return (
    <div className="bg-background text-foreground">
      <Button onClick={handleClick} disabled={isPending}>
        Click me to start transition
      </Button>
    </div>
  );
};
export default Homepage;
