import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";

import { Navigation } from "./Navigation";

function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <Link href="/">
        <Image
          src={logo}
          alt="Comprany logo"
          width={52}
          height={52}
          className="hover:rotate-45 duration-400"
        />
      </Link>
      <Navigation />
    </nav>
  );
}

export { Navbar };
