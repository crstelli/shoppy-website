import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";

import { Navigation } from "./Navigation";

function Navbar() {
  return (
    <nav className="mt-10 flex items-center justify-between">
      <Link href="/">
        <Image src={logo} alt="Comprany logo" width={52} height={52} />
      </Link>
      <Navigation />
    </nav>
  );
}

export { Navbar };
