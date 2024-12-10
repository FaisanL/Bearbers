import "./globals.css";
import NavbarComp from "./components/Navbar";

import { Nunito } from "next/font/google";
const nunito = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunito.className}>
      <body>
        <NavbarComp></NavbarComp>
        {children}
      </body>
    </html>
  );
}
