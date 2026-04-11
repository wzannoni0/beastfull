import "./globals.css";

export const metadata = {
  title: "NEXUS | Premium Experience",
  description: "Premium mobile-first platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
