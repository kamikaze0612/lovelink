const AuthLayout: React.Layout = ({ children }) => {
  return (
    <main className="grid h-[100vh] grid-cols-2">
      {children}
      <div className="p-2">
        <div className="flex h-full flex-col items-center justify-center rounded-3xl bg-[url(/couple.jpg)] bg-cover bg-center">
          <h2 className="text-7xl font-bold text-brand-foreground">
            Hello there
          </h2>
          <p className="text-medium text-brand-foreground">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi,
            reprehenderit!
          </p>
        </div>
      </div>
    </main>
  );
};
export default AuthLayout;
