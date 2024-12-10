import "./globals.css";
import NavbarComp from "./components/Navbar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavbarComp></NavbarComp>
        {children}
      </body>
    </html>
  );
}
