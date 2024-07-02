import { auth } from "@/auth";

import { LogoutButton } from "./logout_button";

const Homepage: React.Page = async () => {
  const user = await auth();

  return (
    <div className="bg-background text-foreground">
      <h1>Hello</h1>
    </div>
  );
};
export default Homepage;
