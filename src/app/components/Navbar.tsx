import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import styles from "./navbar.module.css";
import clsx from "clsx";
export const AcmeLogo = () => {
  return <Image src="/Bearsber.png" alt="logo" width={70} height={70}></Image>;
};

export default function NavbarComp() {
  return (
    <Navbar className={clsx(styles.backnav, "text-lg font-bold back-nav")}>
      <NavbarBrand>
        <AcmeLogo />
        <p className={styles.pNav}>BearsBers</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem>
          <Link href="#" className={styles.links}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className={styles.links}>
            Citas
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className={styles.links}>
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
