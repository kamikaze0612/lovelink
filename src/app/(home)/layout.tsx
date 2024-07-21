import { Header } from "@/components/layout/header";

const HomeLayout: React.Layout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};
export default HomeLayout;
