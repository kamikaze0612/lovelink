import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export const LogoutButton: React.FC = () => {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/login" });
        }}
      >
        <Button>Log Out</Button>
      </form>
    </div>
  );
};
