import '~styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="grid min-h-screen place-items-center">{children}</body>
    </html>
  );
}