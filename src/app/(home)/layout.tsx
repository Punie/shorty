export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="m-auto max-w-3xl">
      <header className="p-4 md:p-6">
        <h1 className="text-center text-5xl font-bold md:text-7xl">Shorty!</h1>
      </header>

      <main className="p-4 md:p-6">{children}</main>
    </div>
  );
}
