import { auth } from "@/auth";
import { LogoutButton } from "../logout_button";
import Image from "next/image";
const DashboardPage: React.Page = async () => {
  const session = await auth();

  return (
    <div>
      <h1>Dashboard page</h1>
      <p>
        User <span className="font-bold">{JSON.stringify(session?.user)}</span>
      </p>
      <LogoutButton />
      {session?.user?.image && (
        <div className="relative">
          <Image src={session.user.image} width={60} height={60} alt="Avatar" />
        </div>
      )}
    </div>
  );
};
export default DashboardPage;
