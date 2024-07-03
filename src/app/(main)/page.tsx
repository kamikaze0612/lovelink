import { auth } from "@/auth";
import { Hero } from "@/components/hero";
import { Header } from "@/components/layout/header";

const Homepage: React.Page = async () => {
  const user = await auth();

  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
};
export default Homepage;
